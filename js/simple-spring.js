let bob;
let anchor;
let velocity;
let restLength;
let k = 0.05;
let damping = 0.99;
let r;
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);

    restLength = height / 2;
    bob = createVector(width / 2, height * 0.75);
    anchor = createVector(width / 2, 0);
    velocity = createVector(0, 0);
    gravity = createVector(0, 1);
    r = height / 16;

    stroke(96);
    strokeWeight(4);
    fill(96);
}

function draw() {
    background(191);

    line(anchor.x, anchor.y, bob.x, bob.y);
    circle(bob.x, bob.y, r);

    let force = p5.Vector.sub(bob, anchor);
    let x = force.mag() - restLength;
    force.normalize();
    // Hooke's Law
    force.mult(-k * x);

    if (mouseIsPressed) {
        bob.x = mouseX;
        bob.y = mouseY;
        velocity.set(0, 0);
    }

    // Newton's Second Law (w/ mass = 1)
    velocity.add(force);
    velocity.add(gravity);
    bob.add(velocity);

    velocity.mult(damping);
}