let x = 100;
let y = Math.round(window.innerHeight / 2);
let d = window.innerWidth / 16;
let r = d / 2;
let xSpeed = Math.round(window.innerWidth / 100);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(239);

    noStroke();
    fill(0, 64, 239);
    circle(x, y, d);

    x += xSpeed;

    if (x - r < 0 || x + r > width) {
        xSpeed *= -1;
    }
}