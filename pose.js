let video;
let poseNet;
let results;
let myPose;

function setup() {
    createCanvas(1280,720);
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, onReady);
    poseNet.on('pose', (res)=>{
        if(res.length>0){
            results=res;
            myPose = results[0].pose;
        }
    });

}
function onReady() {
    console.log("OK")
}
function draw() {
    image(video,0,0);
    fill(255,0,0);
    if(myPose){
        ellipse(myPose.nose.x, myPose.nose.y,50);
    }
}