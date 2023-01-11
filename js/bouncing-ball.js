let x = 100;
let y = Math.round(window.innerHeight / 2);
let d = window.innerWidth / 16;
let r = d / 2;
let xSpeed = 10;
let ySpeed = 10;
let gravity = 4;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    canvas.style.display = 'block';
}

function draw() {
    background(239);

    noStroke();
    fill(0, 64, 239);
    circle(x, y, d);

    x += xSpeed;
    y += ySpeed;

    if (x - r < 0 || x + r > width) {
        xSpeed *= -1;
    }

    if (y - r < 0 || y + r > height) {
        ySpeed *= -1;
    }

    if (y + r < height) {
        ySpeed += gravity;
    }
}