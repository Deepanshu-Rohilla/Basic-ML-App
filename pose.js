let vidoe;


function setup() {
    createCanvas(1280,720);
    vidoe = createCapture(VIDEO);

}
function draw() {
    image(video,0,0);
}