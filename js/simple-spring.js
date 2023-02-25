let y = innerHeight / 2;
let restLength = y;
let k = 0.05;
let velocity = 0;
let damping = 0.99;
let r;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = height / 16;
}

function draw() {
    background(191);

    stroke(96);
    // strokeWeight(4);
    renderSpring({x: width / 2, y: 0}, {x: width / 2, y: y});

    fill(96);
    circle(width / 2, y, r);

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

function renderSpring(p0, p1) {
    let offset = 10;
    let d = (p1.y - p0.y) - r / 2;
    let s = d / 32;

    for (let y = 0; y < d; y += s) {
        push();
        translate(p0.x, 0);
        line(-offset, y, offset, y + s / 2);
        line(offset, y + s / 2, -offset, y + s);
        pop();
    }
}