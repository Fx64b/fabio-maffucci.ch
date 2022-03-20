var loading = document.getElementById("loading");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// improve animation or make it entirely in css
//
async function load() {
    while(true) {
        loading.innerHTML = "&nbsp;";
        await sleep(1000);
        loading.innerText = ".";
        await sleep(1000);
        loading.innerText = "..";
        await sleep(1000);
        loading.innerText = "...";
        await sleep(1000);
    }
}

load();