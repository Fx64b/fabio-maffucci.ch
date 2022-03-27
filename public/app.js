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

    // add div for git output (Yes, the following text that is displayed is actual git pull output)
    loading.innerHTML += '<div id="gitOutput"></div>';

    // set gitoutput div as variable
    var gitOutput = document.getElementById("gitOutput");

    // git pull output
    gitOutput.innerHTML += "<br>";

    // set objects to random amount
    do {
        var objects = Math.ceil(Math.random() * 100);
    } while (objects < 9 || objects > 80);
    
    await sleep(50);

    // object enumeration and count ainimation
    for(var i = 0; i<objects+1; i++) {
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+i+'';
        await sleep(25 * (Math.random() + Math.random()));
    }

    await sleep(300);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.';

    await sleep(300);


    // counting objects animation
    for(var i = 0; i<objects+1; i++) {
        var percent = Math.ceil(i * (100 / objects));
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: '+percent+'% ('+i+'/'+objects+')<br>';
        await sleep(50 * (Math.random() + Math.random()));
    }

    await sleep(400);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';

    await sleep(200);

    // compressing objects animation

    // get random number of objects to compress
    do {
        var compress = Math.ceil(Math.random() * 10);
    } while (compress < 2);

    for(var i = 0; i<compress+1; i++) {
        var percent = Math.ceil(i * (100 / compress));
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: '+percent+'% ('+i+'/'+compress+')';
        await sleep(50 * (Math.random() + Math.random()));
    }

    await sleep(80);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: 100% ('+compress+'/'+compress+'), done.<br>';
    
    await sleep(50);

    gitOutput.innerHTML += '<span class="yellow">remote</span>: Total '+compress+' (delta '+Math.ceil(compress/2)+'), reused 0 (delta 0), pack-reused 0';


    // is later used to simulate kilobytes increasing while unpacking
    // kilobytes 
    var kib = Math.random()*1000;

    // round to 2 decimal points
    kib = kib.toFixed(2);

    // current kilobytes that will be displayed
    var cKib = 0;

    // define min value for kibs
    var max = Math.random()*100;
    var kibs = max;

    // unpacking animation
    for(var i = 0; i<compress+1; i++) {
        var percent = Math.ceil(i * (100 / compress));
        // todo: store the following lines in a variable
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: 100% ('+compress+'/'+compress+'), done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Total '+compress+' (delta '+Math.ceil(compress/2)+'), reused 0 (delta 0), pack-reused 0';
        gitOutput.innerHTML += '<div id="unpacking"></div>';

        var unpacking = document.getElementById("unpacking");


        // how many times kib and kibs should get updated per unpacked object
        var updated = Math.floor(Math.random()*10);


        for(var j = 0; j<updated; j++) {
            // kilobytes per second
            kibs = Math.floor(max * Math.random())*0.5;   // it is difficult to create a realistic and stable animation for this

            // round to 2 decimal points
            kibs = kibs.toFixed(2);

            unpacking.innerHTML = 'Unpacking objects: '+percent+'% ('+i+'/'+compress+'), '+cKib.toFixed(2)+' KiB | '+kibs+' KiB/s';

            // increase cKib
            cKib += (Math.random() * 5);

            await sleep(100);
        }

        await sleep(50 * (Math.random() + Math.random()));
    }

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: 100% ('+compress+'/'+compress+'), done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Total '+compress+' (delta '+Math.ceil(compress/2)+'), reused 0 (delta 0), pack-reused 0<br>';
    gitOutput.innerHTML += 'Unpacking objects: 100% ('+compress+'/'+compress+'), '+cKib.toFixed(2)+' KiB | '+kibs+' KiB/s, done.';

    await sleep(1500);

    gitOutput.innerHTML += '<br><br><span class="orange">warning: </span>This site is currently work in progress!';

    await sleep(2000);

    // wip = work in progress
    gitOutput.innerHTML += '<br><br><div id="wip"></div>'

    var wip = document.getElementById("wip");

    while(true) {
        wip.innerHTML = "Waiting for Fabio to finish this site ( / )";
        await sleep(500);
        wip.innerHTML = "Waiting for Fabio to finish this site ( -- )";
        await sleep(500);
        wip.innerHTML = "Waiting for Fabio to finish this site ( \\ )";
        await sleep(500);
        wip.innerHTML = "Waiting for Fabio to finish this site ( | )";
        await sleep(500);
    }


    /*

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