let allJobs = [];
const loadAllJobs = () => {

    toggleBtn('all-tab-btn');
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
    .then(res => res.json())
    .then(data => {
        allJobs = data.data;
        displayAllJobs(data.data);
    });
}

const displayAllJobs = (jobs) => {
    setJobCount(jobs);

    const jobContainer = document.getElementById('job-container');
    jobContainer.innerHTML = "";

    for(const job of jobs){
        const newCard = document.createElement('div');

        newCard.innerHTML = `
        <div onclick="loadJobDetails(${job.id})" class="job-card p-4 bg-base-100 h-full rounded-2xl border-t-4 border-[${borderColor(job.status)}] shadow ${job.status}">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <img src="./assets/${job.status}-Status.png" alt="">
                </div>
                <p class="text-[${textColor(job.priority)}] py-1 px-5 rounded-full bg-[${bgColor(job.priority)}]">${job.priority.toUpperCase()}</p>
            </div>
            <div class="space-y-3 border-b-2 border-gray-200 pb-4">
                <h1 class="font-semibold text-lg">${job.title}</h1>
                <p class="text-sm text-[#64748B]">${job.description}</p>
                <div class="flex gap-2">
                    ${createLabels(job.labels)}
                </div>
            </div>
            <div class="p-4 text-[10px]">
                <div class="flex justify-between">
                    <p class="text-[#64748B]">#1 by ${job.author}</p>
                    <p class="text-[#64748B]">${job.createdAt}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-[#64748B]">${job.assignee ? job.assignee : "Assignee Unassigned"}</p>
                    <p class="text-[#64748B]">${job.updatedAt}</p>
                </div>
            </div>
        </div>
        `;

        jobContainer.append(newCard);
    }


}
function loadJobDetails(id){
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    fetch(url)
    .then(res => res.json())
    .then(details => displayJobDetails(details.data))
}

function displayJobDetails(job){
    const detailBox = document.getElementById('detail-box');
    detailBox.innerHTML =`
    <h1 class="font-bold text-2xl">${job.title}</h1>
            <ul class="flex gap-5 text-[10px] items-center">
                <li class="bg-${job.status == "open" ? 'green' : 'red'}-400 py-1 px-5 rounded-full text-white">${job.status == "open" ? "Opened" : "Closed"}</li>
                <li class="list-disc">Opened by ${job.author}</li>
                <li class="list-disc">${job.createdAt.slice(0, -10)}</li>
            </ul>
            <div class="">
                ${createLabels(job.labels)}
            </div>
            <p class="text-[#64748B]">${job.description}</p>
            <div class="flex bg-base-200 p-4">
                <div class="flex-1 space-y-2">
                    <p class="">Assignee:</p>
                    <p class="font-semibold">${job.assignee || "Assingee Unassigned"}</p>
                </div>
                <div class="flex-1 space-y-2">
                    <p class="">Priority:</p>
                    <p class="text-[${textColor(job.priority)}] text-[12px] inline-block py-1 px-5 rounded-full bg-[${bgColor(job.priority)}]">${job.priority.toUpperCase()}</p>
                </div>
    `;
    document.getElementById('my_modal').showModal();
}
loadAllJobs();