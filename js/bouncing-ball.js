let x = 100;
let y = Math.round(window.innerHeight / 2);
let d = window.innerWidth / 16;
let xSpeed = Math.round(window.innerWidth / 100);
console.log(xSpeed);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(239);

    noStroke();
    fill(0, 64, 239);
    circle(x, y, d);

    x += xSpeed;
}