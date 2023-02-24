let y = innerHeight / 2;
let restLength = y;
let k = 0.05;
let velocity = 0;
let damping = 0.99;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(191);

    stroke(96);
    strokeWeight(8);
    line(width / 2, 0, width / 2, y);

    fill(96);
    circle(width / 2, y, height / 16);

    let x = y - restLength;
    // Hooke's Law
    let force = -k * x;

    if (mouseIsPressed) {
        y = mouseY;
        velocity = 0;
    }

    // Newton's Second Law (w/ mass = 1)
    velocity += force;
    y += velocity;

    velocity *= damping;
}