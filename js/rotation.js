let angle = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(223);

    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(angle);
    noStroke();
    fill(0, 128, 64);
    rect(0, 0, width * 0.8, height / 16);

    angle += 0.01;
}