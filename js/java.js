var myVideo = document.getElementById("myVid");
myVideo.volume = 0.5;

function playVideo() 
{
    myVideo.play();
}
function pauseVideo() 
{
    myVideo.pause();
}
function rewindVideo() 
{
    myVideo.currentTime = myVideo.currentTime - 5;
}
function fastForwardVideo() 
{
    myVideo.currentTime = myVideo.currentTime + 5;
}

function lowerVolume()
{
    myVideo.volume = myVideo.volume - 0.1;
}

function raiseVolume()
{
    myVideo.volume = myVideo.volume + 0.1;
}