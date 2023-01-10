

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    stroke(0);
    strokeWeight(2);
}

function draw() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}