var myVideo = document.getElementById("myVid");

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