/*
    Graph of one-dimensional Perlin noise as seen on The Coding Train:
    https://www.youtube.com/watch?v=y7sgcFhk6ZM
*/

let start = 0;
let inc = 0.01;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(255);
    stroke(0);
    noFill();
    let xOff = start;
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = noise(xOff) * height;
        vertex(x, y);
        xOff += inc;
    }
    endShape();
    start += inc;
}