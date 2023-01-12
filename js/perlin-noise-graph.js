/*
    Graph of one-dimensional Perlin noise as seen on The Coding Train:
    https://www.youtube.com/watch?v=y7sgcFhk6ZM
*/

let xOff = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(255);
    stroke(0);
    noFill();
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = noise(xOff) * height;
        vertex(x, y);
        xOff += 0.01;
    }
    endShape();

    noLoop();
}