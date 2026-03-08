const loadAllJobs = (tab) => {

    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
    .then(res => res.json())
    .then(data => displayAllJobs(data.data));
}

const displayAllJobs = (jobs) => {
    setJobCount(jobs);

    const jobContainer = document.getElementById('job-container');
    jobContainer.innerHTML = "";

    for(const job of jobs){
        const newCard = document.createElement('div');


        newCard.innerHTML = `
        <div class="job-card p-4 bg-base-100 h-full rounded-2xl border-t-4 border-[${borderColor(job.status)}] shadow">
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