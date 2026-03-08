document.getElementById('open-tab-btn').addEventListener('click', () => {
    toggleBtn('open-tab-btn');
    manageSpinner(true);

    const openJobs = allJobs.filter(job => job.status == "open");
    displayAllJobs(openJobs);
    setJobCount(openJobs);
})