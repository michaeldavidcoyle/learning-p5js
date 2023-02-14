let turn = Math.PI / 6;
let x, y;
let count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height - height / 5;
}

function draw() {
    noLoop();
    background(223);
    branch(x, y, 150, -PI / 2, 12);
}
function branch(x, y, length, angle, weight) {
    let endX = x + cos(angle) * length;
    let endY = y + sin(angle) * length;

    strokeWeight(weight);
    line(x, y, endX, endY);

    if (length > 3) {
        let nextLength = length * 0.75;
        let angleA = angle + turn;
        let angleB = angle - turn;
        let nextWeight = weight * 0.75;
        branch(endX, endY, nextLength, angleA, nextWeight);
        branch(endX, endY, nextLength, angleB, nextWeight);
    }
}
