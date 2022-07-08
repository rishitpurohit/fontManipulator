var leftWrist=0;
var rightWrist=0;
var difference=0;

function setup(){
    camera=createCapture();
camera.position(80,180);
camera.size(300,300)
canvas=createCanvas(250,250);
canvas.position(500,180)

var p= ml5.poseNet(camera,modelLoaded);
p.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results,error){
    if(error){
        console.error(error);
    }

    else{
        if(results.length>0){
        console.log(results);
leftWrist=results[0].pose.leftWrist.x;
leftWrist=results[0].pose.leftWrist.y;
difference=leftWrist-rightWrist;
        }
    }
}

function draw(){
    background(0,255,0);
    fill(0,0,255);
    textSize(difference - 200);
    text("Rishit",50,200);
}
