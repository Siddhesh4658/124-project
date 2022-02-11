function setup()
{
    video = createCapture(VIDEO);
    video.size(480, 500);

    canvas = createCanvas(350, 300);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#93CAED');
}

function modelLoaded()
{
    console.log('PoseNet Is Initailized!');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

