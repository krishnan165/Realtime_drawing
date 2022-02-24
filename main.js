function preload()
{

}

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(600,550);
    canvas.position(580,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
       console.log(results);
    }
}

function modelLoaded()
{
    console.log("Posenet is working");
}

function draw()
{
    background("cyan");
}