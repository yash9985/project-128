song1 = "";
song2 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("Original Pokemon Theme Singer Jason Paige In Studio Full Pokemon Theme Song.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x = " + leftWristX + " left wrist y = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x = " + rightWristX + " right wrist y = " + rightWristY);
    }
}

