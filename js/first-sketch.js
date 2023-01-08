'use strict';

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    strokeWeight(1);
    arc(200, 50, 80, 80, 0, Math.PI);
    ellipse(60, 50, 100, 80);
    circle(300, 50, 40);
    line(50, 120, 300, 150);
    strokeWeight(3);
    for (let x = 1; x < 5; x++) {
        point(x * 80, 200);
    }
    strokeWeight(1);
    quad(30, 232, 111, 243, 107, 295, 40, 270);
    rect(180, 250, 80, 55);
    square(300, 275, 70);
    triangle(35, 310, 80, 370, 180, 388);
}