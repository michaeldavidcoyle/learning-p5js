let sideCount = 8;
let step;
let radius;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    radius = min(width, height) / 3;
    step = TAU / sideCount;
}

function draw() {
    background(223);

    beginShape();
    for (let angle = 0; angle < TAU; angle += step) {
        let p = coordinates(
            {x: width / 2, y: height / 2},
            radius,
            angle
        );
        vertex(p.x, p.y);
    }
    endShape(CLOSE);
}

function coordinates(origin, radius, angle) {
    return {
        x: origin.x + cos(angle) * radius,
        y: origin.y + sin(angle) * radius
    }
}