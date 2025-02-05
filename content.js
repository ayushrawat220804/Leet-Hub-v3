// Wait for the success tick (Green Tick)
function checkSubmission() {
    return document.querySelector('.success__3Ai7') ? true : false;
}

// Extract Problem Title
function getProblemTitle() {
    const titleElement = document.querySelector("h1");
    return titleElement ? titleElement.innerText.trim() : "Unknown Problem";
}

// Extract Problem Difficulty
function getProblemDifficulty() {
    const difficultyElement = document.querySelector('.text-label-1'); 
    return difficultyElement ? difficultyElement.innerText.toLowerCase() : "unknown";
}

// Extract Solution Code
function getSolutionCode() {
    const codeElement = document.querySelector('.monaco-editor');
    return codeElement ? codeElement.innerText : "";
}

// Send Data to Background for Pushing
function sendToBackground() {
    if (!checkSubmission()) return;

    const problemTitle = getProblemTitle();
    const difficulty = getProblemDifficulty();
    const solutionCode = getSolutionCode();

    chrome.runtime.sendMessage({
        action: "push_solution",
        title: problemTitle,
        difficulty: difficulty,
        code: solutionCode
    });
}

setInterval(sendToBackground, 5000); // Run every 5 sec after submission
