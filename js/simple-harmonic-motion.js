let angles = [];
let angleVs = [];
let diameter;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleV = TAU / 128;
    diameter = 16;
    let total = width / diameter;
    for (let i = 0; i <= total; i++) {
        angles.push(map(i, 0, total, 0, TAU * 2));
        angleVs.push(0.1 + i / 100);
    }
    stroke(160, 160, 144);
    strokeWeight(4);
    fill(160, 160, 144);
    // noFill();
}

function draw() {
    background(32);

    for (let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, height - 100, 100);
        let x = map(i, 0, angles.length, 0, width);
        circle(x, y, diameter);
        angles[i] += 0.01;
    }
}