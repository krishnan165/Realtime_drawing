noseX=0;
noseY=0;

leftwristx=0;
rightwristx=0;
difference=0;

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
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("Nose X="+noseX);
       console.log("Nose Y="+noseY);
 
       rightwristx=results[0].pose.rightWrist.x;
       leftwristx=results[0].pose.leftWrist.y;
       difference=floor(leftwristx-rightwristx);
       
       console.log("Left Wrist="+leftwristx);
       console.log("Right Wrist="+rightwristx);
       console.log("Difference="+difference);
    }
}

function modelLoaded()
{
    console.log("Posenet is working");
}

function draw()
{
    background("cyan");
    fill("crimson");
    stroke("#ff7369");
    square(noseX,noseY,difference);    
    
    document.getElementById("output_span").innerHTML="Length of the square: "+difference+"px";
    
}