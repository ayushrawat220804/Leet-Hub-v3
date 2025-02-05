chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "push_solution") {
        pushToGitHub(request.title, request.difficulty, request.code);
    }
});

async function pushToGitHub(problemName, difficulty, code) {
    const username = "ayushrawat220804";
    const repoName = "leethub-v3";
    
    // Define Branches: Main + Difficulty
    const branches = ["main", difficulty];

    for (const branch of branches) {
        await pushCodeToBranch(branch, problemName, code);
    }

    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "LeetHub V3",
        message: `✅ Solution pushed to ${difficulty} & main branches!`
    });
}
