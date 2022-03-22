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

    await sleep(500);

    // add div for git output
    loading.innerHTML += '<div id="gitOutput"></div>';

    // set gitoutput div as variable
    var gitOutput = document.getElementById("gitOutput");

    // git pull output
    gitOutput.innerHTML += "<br>";

    // set objects to random amount
    do {
        var objects = Math.ceil(Math.random() * 100);
    } while (objects < 3 || objects > 90);
    
    await sleep(100);

    // object enumeration and count ainimation
    for(var i = 0; i<objects+1; i++) {
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+i+'';
        await sleep(100 * Math.random());
    }

    await sleep(500);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.';

    

    /*
    
remote: Counting objects: 100% (20/20), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 15 (delta 7), reused 15 (delta 7), pack-reused 0
Unpacking objects: 100% (15/15), 5.58 KiB | 55.00 KiB/s, done.
From https://github.com/Fx64b/fabio-maffucci.ch
   b77b4be..6c5213f  main       -> origin/main
Updating b77b4be..6c5213f
Fast-forward
 public/app.js       |   8 ++++--
 public/img/icon.ico | Bin 0 -> 252990 bytes
 public/img/icon.svg |  70 ++++++++++++++++++++++++++++++++++++++++++++++++++++
 public/index.html   |   1 +
 public/style.css    |   3 ++-
 5 files changed, 79 insertions(+), 3 deletions(-)
 create mode 100644 public/img/icon.ico
 create mode 100755 public/img/icon.svg
    
    
    */

}

loadingAnimation();