let angle;
let bob;
let length;
let angleV;
let angleA;
let origin;

let gravity = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);

    stroke(64);
    strokeWeight(8);
    fill(64);

    angle = PI / 4;
    bob = createVector();
    length = height * 0.67;
    angleV = 0;
    angleA = 0.005;
    origin = createVector(width / 2, 0);
}

function draw() {
    background(223);

    angleA = -(gravity * sin(angle) / length);
    angleV += angleA;
    angle += angleV;

    bob.x = length * sin(angle) + origin.x;
    bob.y = length * cos(angle) + origin.y;

    line(origin.x, origin.y, bob.x, bob.y);
    circle(bob.x, bob.y, 64);
}