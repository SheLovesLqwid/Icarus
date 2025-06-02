const config = {
    method: "get",
    headers: {
        "User-Agent": "request"
    },
};

async function fetchLatestRelease() {
    try {
        const request = await axios.get("https://github.com/SheLovesLqwid/Icarus/releases", config);
        return request.data[0].name.toString().slice(1);
    } catch (err) {
        return currentVersion;
    }
}

async function checkForUpdates() {
    const latestRelease = await fetchLatestRelease();
    if (currentVersion != latestRelease) {
        console.log(`^1This version of OGDev Studios Icarus is outdated. Please update to the latest version!\nLatest Version: ${latestRelease} | Current Version: ${currentVersion}^0`);
    }
}

setImmediate(() => { checkForUpdates(); });