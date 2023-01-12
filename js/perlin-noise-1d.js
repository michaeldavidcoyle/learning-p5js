/*
    Using p5 noise function to generate smooth random motion
    as demonstrated on The Coding Train: https://www.youtube.com/watch?v=y7sgcFhk6ZM
*/

let x,
    y,
    xOff1 = 0,
    xOff2 = 10000,
    w = Math.round(window.innerWidth / 32);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(128);

    x = noise(xOff1) * width;
    y = noise(xOff2) * height;

    xOff1 += 0.0011;
    xOff2 += 0.0013;

    fill(64);
    circle(x, y, w);
}