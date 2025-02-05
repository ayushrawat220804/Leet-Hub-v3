document.getElementById("pushBtn").addEventListener("click", function() {
    chrome.runtime.sendMessage({ action: "push_solution" });
    alert("✅ Solution pushed to GitHub!");
});
