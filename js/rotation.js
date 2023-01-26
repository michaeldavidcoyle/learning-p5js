let angle = 0;
let angleVelocity = 0;
let angleAcceleration = 0.0002;
let friction = 0.99;
let arcW;
let turn = Math.PI / 3;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    arcW = width * 0.9;
    colorMode(HSL, 360, 100, 100);
}

function draw() {
    background(223);

    translate(width / 2, height / 2);
    wedges();
    rotate(angle);

    arrow();

    if (mouseIsPressed) {
        angle = atan2(mouseY - height / 2, mouseX - width / 2);
        angleVelocity = dist(mouseX, mouseY, pmouseX, pmouseY) / 100;
    } else {
        angle += angleVelocity;
        // angleVelocity += angleAcceleration;

        // friction
        angleVelocity *= friction;
    }
}

function arrow() {
    let w = width * 0.8;
    let h = height / 32;
    let end = w / 2;
    noStroke();
    fill(0, 0, 20);
    rect(0, 0, w, h);
    triangle(end + h, 0, end - h, h, end - h, -h);
}

function wedges() {
    // draw colored pie wedges
    let stop = turn;
    for (let start = 0; start < TAU; start += turn) {
        fill(degrees(start), 100, 48);
        arc(0, 0, arcW, arcW, start, stop);
        stop += turn;
    }
}
