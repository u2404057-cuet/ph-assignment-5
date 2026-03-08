document.getElementById('closed-tab-btn').addEventListener('click', () => {
    toggleBtn('closed-tab-btn');

    const closed = allJobs.filter(job => job.status == "open");
    displayAllJobs(openJobs);
    setJobCount(openJobs);
})