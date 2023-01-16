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
    weightOffset = 0,
    margin;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(239);
    offset = min(width, height) / 32;
    // margin = Math.min(width, height) / 16;
    margin = 0;
}

function draw() {
    let deltaX = random(-offset, offset);
    let deltaY = random(-offset, offset);

    end.x = start.x + deltaX;
    end.y = start.y + deltaY;

    keepInBounds();

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

function keepInBounds() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let adjustment = Math.floor(Math.random() * margin);

    if (end.x < margin) {
        end.x = margin + adjustment;
    }

    if (end.x > width - margin) {
        end.x = (width - margin) - adjustment;
    }

    if (end.y < margin) {
        end.y = margin + adjustment;
    }

    if (end.y > height - margin) {
        end.y = (height - margin) - adjustment;
    }
}