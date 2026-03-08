document.getElementById('closed-tab-btn').addEventListener('click', () => {
    toggleBtn('closed-tab-btn');

    const closedJobs = allJobs.filter(job => job.status == "closed");
    displayAllJobs(closedJobs);
    setJobCount(closedJobs);
})