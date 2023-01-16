let angle = 0;
let radius = Math.min(window.innerWidth, window.innerHeight) / 3;
let step = (Math.PI * 2) / 100;
let w = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
}

function draw() {
    background(239);

    for (let i = 0; i < 75; i++) {
        let subAngle = angle + (step * i);
        let pos = ellipticalCoordinates(width / 2, height / 2, radius, radius, subAngle);
        let gray = map(i, 0, 74, 239, 0);
        fill(gray);
        circle(pos.x, pos.y, w + i);
    }

    angle += step;
}

function ellipticalCoordinates(centerX, centerY, xRadius, yRadius, angle) {
    return {
        x: centerX + Math.cos(angle) * xRadius,
        y: centerY + Math.sin(angle) * yRadius
    }
}