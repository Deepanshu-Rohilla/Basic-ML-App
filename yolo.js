console.log("BC");
let video;
let yolo;
let results;
function setup() {
    createCanvas(1280, 720); 
    video = createCapture(VIDEO);
    yolo = ml5.YOLO(video, onReady);
}
function onReady() {
    console.log("OK");
    detect();
}
function detect(){
    yolo.detect((err,res) => {
        console.log(res.length);
        if(res.length>0){
       results = res;
       console.log(results);
       detect();
        }
    });
}
function draw() {
    image(video, 0, 0,width,height);
    if(results){
    for(let i=0;i<results.length;i++){
        noStroke();
        fill(159,79,187);
        text(results[i].label,
            results[i].x*width,
            results[i].y*height +20);
            noFill();
            strokeWeight(5);
            stroke(0,255,0);
            rect(results[i].x*width,
                results[i].y*height,
                results[i].w*width,
                results[i].h*height);

    }
}
}