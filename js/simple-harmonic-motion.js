let angle = 0;
let angleV;
let diameter;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleV = TAU / 128;
    diameter = 64;
}

function draw() {
    background(32);

    let y = map(sin(angle), -1, 1, height - 50, 50);

    stroke(160, 160, 128);
    strokeWeight(4);
    fill(160, 160, 128);
    line(width / 2, height / 2, width / 2, y);
    circle(width / 2, y, diameter);

    angle += angleV;
}