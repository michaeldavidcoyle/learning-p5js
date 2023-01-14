const start = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}

const end = {
    x: null,
    y: null
}

let offset,
    gray,
    grayOffset = 0,
    weight,
    weightOffset = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(239);
    offset = min(width, height) / 64;
}

function draw() {
    let deltaX = random(-offset, offset);
    let deltaY = random(-offset, offset);

    end.x = start.x + deltaX;
    end.y = start.y + deltaY;

    gray = noise(grayOffset) * 255;
    weight = noise(weightOffset) * 5;
    stroke(gray);
    strokeWeight(weight);
    line(start.x, start.y, end.x, end.y);

    start.x = end.x;
    start.y = end.y;

    grayOffset += 0.01;
    weightOffset += 0.1;
}