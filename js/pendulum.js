function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(64);
    strokeWeight(4);
}

function draw() {
    background(223);

    line(width / 2, 0, width / 2, height - height / 4);
    circle(width / 2, height - height / 4, 32);
}