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
        }
    }
}
