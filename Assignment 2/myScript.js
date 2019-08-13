var myAudio = document.getElementById('myAudioID');
var start = document.getElementById('start');
var stop = document.getElementById('stop');

function playMarquee(){
    myMarquee.start();
    myAudio.play();
    start.disabled = true;
}

function startMarquee(){
    setTimeout("myMarquee.scrollAmount='1';", 11 * 1000);
    myAudio.play();
    start.disabled = true;
    start.setAttribute('onclick', 'playMarquee()');
}

function stopMarquee(){                 
    myMarquee.stop();
    myAudio.pause();
    start.disabled = false;
}	