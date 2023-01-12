/*
    Graph of one-dimensional Perlin noise as seen on The Coding Train:
    https://www.youtube.com/watch?v=y7sgcFhk6ZM
*/
const offset = document.querySelector('#offset');
const rate = document.querySelector('#rate');

let start = 0;
let offsetInc = 0.01;
let rateInc = 0.01;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight * 0.7);
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
        xOff += offsetInc;
    }
    endShape();
    start += rateInc;
}

offset.addEventListener('input', event => {
    offsetInc = +event.target.value;
});

rate.addEventListener('input', event => {
    rateInc = +event.target.value;
});