let angle = 0;
let angleVelocity = 0.001;
let angleAcceleration = 0.0002;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(223);

    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(angle);

    arrow();

    angle += angleVelocity;
    angleVelocity += angleAcceleration;
}

function arrow() {
    let w = width * 0.8;
    let h = height / 32;
    let end = w / 2;
    noStroke();
    fill(223, 64, 32);
    rect(0, 0, w, h);
    triangle(end + h, 0, end - h, h, end - h, -h);
}