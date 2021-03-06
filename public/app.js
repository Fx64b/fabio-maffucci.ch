// waits for ms milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// scrolls automatically to the bottom of the
function scroll() {
    // scroll to bottom of the page if window height is to small to display everything
    window.scrollTo(0, document.body.scrollHeight);
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

    scroll();

    // typewriter effect
    var string = "cd fabio-maffucci";

    // for each character in string
    for(var i = 0; i<string.length; i++) {
        if(i<string.length) {
            loading.innerHTML += string.charAt(i);
            await sleep(100);
        }
    }

    scroll();

    await sleep(800);

    loading.innerHTML += '<br><div id="folder">[fabio@maffucci <span class="white">fabio-maffucci</span>]$</div>';

    var folder = document.getElementById("folder");

    scroll();

    // blinking effect
    for(var i = 0; i<2; i++) {
        folder.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ <span class="white">_</span>';
        await sleep(600);
        folder.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ ';
        await sleep(600);
    }

    scroll();


    // typewriter effect
    var string = " git pull";

    // for each character in string
    for(var i = 0; i<string.length; i++) {
        if(i<string.length) {
            loading.innerHTML += string.charAt(i);
            await sleep(100);
        }
    }

    scroll();

    await sleep(500);

    // add div for git output (Yes, the following text that is displayed is actual git pull output)
    loading.innerHTML += '<div id="gitOutput"></div>';

    // set gitoutput div as variable
    var gitOutput = document.getElementById("gitOutput");

    // git pull output
    gitOutput.innerHTML += "<br>";

    scroll();

    // set objects to random amount in range
    do {
        var objects = Math.ceil(Math.random() * 100);
    } while (objects < 9 || objects > 80); // ???? improve later
    
    await sleep(50);

    // object enumeration and count ainimation
    for(var i = 0; i<objects+1; i++) {
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+i+'';
        await sleep(20 * (Math.random() + Math.random()));
    }

    scroll();

    await sleep(300);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.';

    scroll();

    await sleep(300);


    // counting objects animation
    for(var i = 0; i<objects+1; i++) {
        var percent = Math.ceil(i * (100 / objects));
        // prevent percent to go over 100 (sometimes it goes to 101)
        if(percent > 100) {
            percent = 100;
        }
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: '+percent+'% ('+i+'/'+objects+')<br>';
        await sleep(25 * (Math.random() + Math.random()));
    }

    scroll();

    await sleep(400);

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';

    scroll();

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

    scroll();
    
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

    var percent = 0;

    scroll();

    // unpacking animation
    for(var i = 0; i<compress+1; i++) {
        // todo: store the following lines in a variable
        gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: 100% ('+compress+'/'+compress+'), done.<br>';
        gitOutput.innerHTML += '<span class="yellow">remote</span>: Total '+compress+' (delta '+Math.ceil(compress/2)+'), reused 0 (delta 0), pack-reused 0';
        gitOutput.innerHTML += '<div id="unpacking"></div>';

        var unpacking = document.getElementById("unpacking");


        // how many times kib and kibs should get updated per unpacked object
        var updated = Math.floor(Math.random()*8);


        for(var j = 0; j<updated; j++) {
            // kilobytes per second
            kibs = Math.floor(max * Math.random())*0.5;   // it is difficult to create a realistic and stable animation for this

            // round to 2 decimal points
            kibs = kibs.toFixed(2);

            unpacking.innerHTML = 'Unpacking objects: '+percent+'% ('+i+'/'+compress+'), '+cKib.toFixed(2)+' KiB | '+kibs+' KiB/s';

            // increase cKib
            cKib += kibs / 8;

            await sleep(100);
        }

        percent = Math.ceil(i * (100 / compress));

        await sleep(20 * (Math.random() + 1));
    }

    scroll();

    gitOutput.innerHTML = '<span class="yellow">remote</span>: Enumerating objects: '+objects+', done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Counting objects: 100% ('+objects+'/'+objects+'), done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Compressing objects: 100% ('+compress+'/'+compress+'), done.<br>';
    gitOutput.innerHTML += '<span class="yellow">remote</span>: Total '+compress+' (delta '+Math.ceil(compress/2)+'), reused 0 (delta 0), pack-reused 0<br>';
    gitOutput.innerHTML += 'Unpacking objects: 100% ('+compress+'/'+compress+'), '+cKib.toFixed(2)+' KiB | '+kibs+' KiB/s, done.<br>';

    scroll();

    await sleep(400);

    // the link leads to a 404 page because the repository is currently private until the first release
    gitOutput.innerHTML += 'From <a href="https://github.com/Fx64b/fabio-maffucci.ch" target="_blank">https://github.com/Fx64b/fabio-maffucci.ch</a><br>';

    scroll();

    await sleep(300);

    // &emsp; = 4 space characters
    gitOutput.innerHTML += '&emsp;&emsp;&emsp;b79b4ce..6c5273f  main &emsp; -> origin/main<br>';

    scroll();

    await sleep(300);

    gitOutput.innerHTML += 'Updating b79b4ce..6c5273f<br>';

    scroll();

    await sleep(600);

    gitOutput.innerHTML += 'Fast-forward<br>';

    scroll();

    // generate random changes for random files
    // random amount of files

    // files array
    var filesArray = ["public/app.js", "public/index.html", "public/style.css", "README.md", "tailwind.config.js", "package.json"];
    
    // random number in range of 1 and size of array
    var files = Math.floor(Math.random() * (filesArray.length - 1)) + 1;

    // total insertions and deletions
    var insertions = 0;
    var deletions = 0;

    // total deltions
    for(var i = 0; i<files; i++) {
        // random changes per file
        var changes = Math.random() * 20;
        if(changes < 5) {
            changes = Math.ceil(changes);
        } else {
            changes = Math.floor(changes);
        }

        var additions = Math.floor(Math.random() * (changes -2)) + 1;
        
        insertions += additions;
        deletions += changes-additions;

        var changesString = '<span class="space-2">' + changes + '</span>' + '| &emsp; <span class="green">';

        // Math.ceil(additions/2);
        for(var j = 0; j<additions; j++) {
            changesString += "+";
        }

        changesString += '</span><span class="red">';

        //(Math.ceil(changes/2)-additions)
        for(var j = 0; j<changes-additions; j++) {
            changesString += "-";
        }

        changesString += '</span>';

        gitOutput.innerHTML += '<span class="space">' + filesArray[i] + '</span>' + changesString + "<br>";

        await sleep(100);
        
    }

    scroll();

    await sleep(300);

    
    gitOutput.innerHTML += '<span class="yellow">' +files + '</span> files changed, <span class="yellow">' + insertions + '</span> insertions(<span class="green">+</span>), <span class="yellow">' + deletions + '</span> deletions(<span class="red">-</span>)<br>';

    scroll();

    await sleep(100);


    // npx command
    loading.innerHTML += '<br><div id="npx">[fabio@maffucci <span class="white">fabio-maffucci</span>]$</div>';

    scroll();

    var npx = document.getElementById("npx");

    // blinking effect
    for(var i = 0; i<4; i++) {
        npx.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ <span class="white">_</span>';
        await sleep(600);
        npx.innerHTML = '[fabio@maffucci <span class="white">fabio-maffucci</span>]$ ';
        await sleep(600);
    }

    scroll();

    // typewriter effect
    var str = " npx live-server public";

    // for each character in string
    for(var i = 0; i<str.length; i++) {
        if(i<str.length) {
            loading.innerHTML += str.charAt(i);
            await sleep(100);
        }
    }

    scroll();

    loading.innerHTML += '<br><div id="liveServer"></div>';

    var liveServer = document.getElementById("liveServer");

    await sleep(1500);

    liveServer.innerHTML = '<span class="darkGreen">Serving "public" at http://127.0.0.1:8080</span>';

    scroll();

    await sleep(1500);

    
    loading.innerHTML = '<br><br><span class="orange">warning: </span>This site is currently work in progress!';

    scroll();

    await sleep(1000);

    // wip = work in progress
    loading.innerHTML += '<br><br><div id="wip"></div>'

    var wip = document.getElementById("wip");

    scroll();

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
    

}

loadingAnimation();