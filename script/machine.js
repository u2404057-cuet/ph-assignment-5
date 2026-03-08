function setJobCount(jobs) {
    const length = jobs.length;
    const jobCount = document.getElementById('job-count');
    jobCount.innerText = length;
}

function toggleBtn(tab){
    document.getElementById('all-tab-btn').classList.add('btn-outline');
    document.getElementById('open-tab-btn').classList.add('btn-outline');
    document.getElementById('closed-tab-btn').classList.add('btn-outline');
    document.getElementById(tab).classList.remove('btn-outline');
}

function textColor(type){
    if(type == 'high'){
        return "#EF4444";
    }
    else if(type == 'medium'){
        return "#D97706";
    }
    else{
        return "#9CA3AF";
    }
}

function bgColor(type){
    if(type == 'high'){
        return "#FEECEC";
    }
    else if(type == 'medium'){
        return "#FFF8DB";
    }
    else{
        return "#EEEFF2";
    }
}

function borderColor(status){
    if(status == "open"){
        return "#00A96E";
    }
    else{
        return "#A855F7";
    }
}

function createLabels(arr){
    const htmlElements = arr.map((el) => `${giveLabel(el)}`);
    return htmlElements.join(" ");
}

function giveLabel(label){
    if(label == "bug"){
        return `<span class="text-[#EF4444] text-[8px] py-1 px-5 rounded-full bg-[#FEECEC]"><i class="fa-solid fa-bug"></i>${label.toUpperCase()}</span>`;
    }
    else if(label == "help wanted"){
        return `<span class="text-[#D97706] text-[8px] py-1 px-5 rounded-full bg-[#FFF8DB]"><i class="fa-solid fa-life-ring"></i>${label.toUpperCase()}</span>`;
    }
    else if(label == "enhancement"){
        return `<span class="text-[#00A96E] text-[8px] py-1 px-5 rounded-full bg-[#BBF7D0]"><i class="fa-solid fa-wand-magic-sparkles"></i>${label.toUpperCase()}</span>`;
    }
    else if(label == "good first issue"){
        return `<span class="text-[#efd544] text-[8px] py-1 px-5 rounded-full bg-[#fffce5]"><i class="fa-solid fa-circle-exclamation"></i>${label.toUpperCase()}</span>`;
    }
    else{
        return `<span class="text-[#2aabd3] text-[8px] py-1 px-5 rounded-full bg-[#ecfafe]"><i class="fa-solid fa-file"></i>${label.toUpperCase()}</span>`;

    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    const searchValue = document.getElementById('search-input').value;
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`;

    fetch(url)
    .then(res => res.json())
    .then(json => displayAllJobs(json.data));
})

const manageSpinner = (status) => {
    
    if(status){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('all-container').classList.add('hidden');
    }
    else{
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('all-container').classList.remove('hidden');
    }
}

