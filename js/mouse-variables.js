

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        stroke(0);
        strokeWeight(2);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

    if (keyIsPressed) {
        stroke(255);
        strokeWeight(8);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}