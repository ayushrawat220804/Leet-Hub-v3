async function pushCodeToBranch(branch, problemTitle, code) {
    const apiBase = "https://api.github.com/repos/ayushrawat220804/leethub-v3";
    const filePath = `${branch}/${problemTitle.replace(/\s+/g, "_")}.py`;

    // Get Latest Commit SHA
    const branchData = await fetch(`${apiBase}/git/refs/heads/${branch}`);
    const branchJson = await branchData.json();

    if (!branchJson.object) {
        await createBranch(branch);
    }

    // Create File Blob
    const blobData = await fetch(`${apiBase}/git/blobs`, {
        method: "POST",
        headers: { "Authorization": `token ${GITHUB_ACCESS_TOKEN}` },
        body: JSON.stringify({ content: btoa(code), encoding: "base64" })
    });

    const blobJson = await blobData.json();

    // Create Commit
    await fetch(`${apiBase}/git/commits`, {
        method: "POST",
        headers: { "Authorization": `token ${GITHUB_ACCESS_TOKEN}` },
        body: JSON.stringify({
            message: `Added ${problemTitle}`,
            parents: [branchJson.object.sha],
            tree: blobJson.sha
        })
    });

    console.log(`✅ ${problemTitle} pushed to ${branch}`);
}
