// Inspired by Numberphile's The Golden Ratio (why it is so irrational)
// https://www.youtube.com/watch?v=sj8Sg8qnjOg

const midpoint = {
    x: null,
    y: null
}

let x,
    y,
    angle,
    factor,
    turn,
    finalRadius;

function setup() {
    createCanvas(windowWidth, windowHeight);
    midpoint.x = width / 2;
    midpoint.y = height / 2;
    angle = 0;
    factor = 0;
    finalRadius = dist(0, 0, midpoint.x, midpoint.y);

    stroke(80, 80, 64);
    textSize(24);
}

function draw() {
    background(198, 165, 133);

    let fraction = factor / 1e6;
    turn = TAU * fraction;
    angle = 0;

    fill(128, 128, 96);
    for (let radius = 0; radius < finalRadius; radius += 0.25) {
        x = midpoint.x + sin(angle) * radius;
        y = midpoint.y + cos(angle) * radius;

        circle(x, y, 8);

        angle += turn;
    }

    factor += 1;

    fill(0);
    text(fraction, 32, height - 32);
}