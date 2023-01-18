const start = {
    x: 0,
    y: window.innerHeight / 2
}

const end = {
    x: window.innerWidth,
    y: window.innerHeight / 2
}

const cp1 = {
    x: null,
    y: null
}

const cp2 = {
    x: null,
    y: null
}

let offsetY1 = 0;
let offsetY2 = 1000;
let offset1 = 1e4;
let offset2 = 2e4;
let offset3 = 3e4;
let offset4 = 4e4;
let offset5 = 5e5;
let inc = 0.0025;
let factor = 1.5;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(64);

    start.y = noise(offsetY1) * height;
    end.y = noise(offsetY2) * height;

    cp1.x = noise(offset1) * width * factor;
    cp1.y = noise(offset2) * height * factor;
    cp2.x = noise(offset3) * width * factor;
    cp2.y = noise(offset4) * height * factor;

    noFill();
    stroke(192, 255, 128);
    for (let i = -32; i < 32; i++) {
        let off = noise(offset5) * i * 32;
        bezier(
            start.x, start.y + off,
            cp1.x + off, cp1.y + off,
            cp2.x + off, cp2.y + off,
            end.x, end.y + off
        );
        offset5 += inc / 100;
    }

    offsetY1 += inc;
    offsetY2 += inc;
    offset1 += inc;
    offset2 += inc;
    offset3 += inc;
    offset4 += inc;
}