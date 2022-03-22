function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadingAnimation()  {
    var loading = document.getElementById("loading");
    var user = document.getElementById("user");
    // wait for a short time
    await sleep(500);

    // blinking effect
    for(var i = 0; i<3; i++) {
        user.innerHTML = '[fabio@maffucci <span class="white">~</span>]$ <span class="white">_</span>';
        await sleep(600);
        user.innerHTML = '[fabio@maffucci <span class="white">~</span>]$ ';
        await sleep(600);
    }

    // typewriter effect
    var string = "cd fabio-maffucci";

    // for each character in string
    for(var i = 0; i<string.length; i++) {
        if(i<string.length) {
            loading.innerHTML += string.charAt(i);
            await sleep(100);
        }
    }

    await sleep(800);

    loading.innerHTML += '<br><div id="folder">[fabio@maffucci <span class="white">fabio-maffucci</span>]$</div>';

    var folder = document.getElementById("folder");

    // blinking effect
    for(var i = 0; i<2; i++) {
        folder.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ <span class="white">_</span>';
        await sleep(600);
        folder.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ ';
        await sleep(600);
    }


    // typewriter effect
    var string = " git pull";

    // for each character in string
    for(var i = 0; i<string.length; i++) {
        if(i<string.length) {
            loading.innerHTML += string.charAt(i);
            await sleep(100);
        }
    }

    await sleep(800);


}

loadingAnimation();