'use strict';

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    colorMode(RGB, 255);
    background(128);

    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    arc(width / 5, height / 6, 120, 120, Math.PI, Math.PI * 1.618);

    fill(0, 64, 255);
    ellipse(width / 2, height / 4, 100, 80);

    noFill();
    stroke(0, 222, 64);
    strokeWeight(7);
    circle(width * 0.75, height / 5, 100);

    stroke(0);
    strokeWeight(4);
    line(width / 2, height * 0.4, width * 0.75, height / 2);

    for (let x = 1; x < 5; x++) {
        stroke(floor(random(160, 255)));
        point(x * 80, height * 0.33);
    }

    stroke(0);
    strokeWeight(1);
    fill(230, 0, 255);
    quad(
        width * 0.2, height * 0.45,
        width * 0.4, height * 0.55,
        width * 0.45, height * 0.7,
        width * .025, height * 0.5
    );

    colorMode(HSL, 360, 100, 100, 1);
    fill(30, 100, 50, 1);
    rect(width / 2, height * 0.6, width * 0.2, height / 5);

    noStroke();
    fill(200, 80, 70, 1);
    square(width - width / 5, height * 0.7, width / 7);

    stroke(0, 0, 100);
    fill(140, 50, 25);
    triangle(width * 0.1, height - height / 10, width * 0.3, height - height / 10, width * 0.4, height * 0.75);
}