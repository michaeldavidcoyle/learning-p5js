let y = innerHeight - innerHeight / 4;
let restLength = innerHeight / 2;
let k = 0.01;
let velocity = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(191);

    stroke(96);
    strokeWeight(10);
    line(width / 2, 0, width / 2, y);

    fill(96);
    circle(width / 2, y, height / 16);

    let x = y - restLength;
    // Hooke's Law
    let force = -k * x;

    // Newton's Second Law (w/ mass = 1)
    velocity += force;
    y += velocity;
}