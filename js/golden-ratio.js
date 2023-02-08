// Inspired by Numberphile's The Golden Ratio (why it is so irrational)
// https://www.youtube.com/watch?v=sj8Sg8qnjOg

const midpoint = {
    x: null,
    y: null
}

let x,
    y,
    angle,
    radius,
    factor,
    turn,
    end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    midpoint.x = width / 2;
    midpoint.y = height / 2;
    angle = 0;
    radius = 0;
    factor = (1 + sqrt(5)) / 2;
    turn = TAU * factor;
    end = dist(0, 0, midpoint.x, midpoint.y);

    stroke(80, 80, 64)
    fill(223, 168, 32);
}

function draw() {
    noLoop();
    background(198, 165, 133);
    for (let radius = 0; radius < end; radius += 0.5) {
        x = midpoint.x + sin(angle) * radius;
        y = midpoint.y + cos(angle) * radius;

        circle(x, y, 16);

        angle += turn;
    }
}