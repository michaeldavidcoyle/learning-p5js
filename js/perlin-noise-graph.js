/*
    Graph of one-dimensional Perlin noise as seen on The Coding Train:
    https://www.youtube.com/watch?v=y7sgcFhk6ZM
*/

const sampleFrequency = document.querySelector('#sample-frequency');
const amplitudeInput = document.querySelector('#amplitude');
const advanceRate = document.querySelector('#advance-rate');

let start = 0;
let frequency = 0.01;
let amplitude = 0.5;
let rateInc = 0.01;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight * 0.7);
}

function draw() {
    background(239);
    stroke(0);
    noFill();
    let xOff = start;
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = noise(xOff) * height * amplitude;
        vertex(x, y);
        xOff += frequency;
    }
    endShape();
    start += rateInc;
}

sampleFrequency.addEventListener('input', event => {
    frequency = +event.target.value;
});

amplitudeInput.addEventListener('input', event => {
    amplitude = +event.target.value;
})

advanceRate.addEventListener('input', event => {
    rateInc = +event.target.value;
});