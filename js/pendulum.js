const startAngleRange = document.getElementById('start-angle-range');
const startAngleNumber = document.getElementById('start-angle-number');
const barLengthRange = document.getElementById('bar-length');
const barLengthDisplay = document.getElementById('bar-length-display');
const bobSizeRange = document.getElementById('bob-size');
const bobSizeDisplay = document.getElementById('bob-size-display');
const initialVelocityRange = document.getElementById('initial-velocity-range');
const initialVelocityNumber = document.getElementById('initial-velocity-number');
const gravityRange = document.getElementById('gravity-range');
const gravityNumber = document.getElementById('gravity-number');
const dampingRange = document.getElementById('damping-range');
const dampingNumber = document.getElementById('damping-number');

barLengthDisplay.value = barLengthRange.value;
bobSizeDisplay.value = bobSizeRange.value;

let pendulum;
let startAngle;
let barLength;
let bobSize;
let initialVelocity;
let gravity;
let damping;

function setInitializeInputValuesAndRanges() {
    startAngle = startAngleRange.value = 45;
    startAngleNumber.value = startAngle;

    barLength = barLengthRange.value = floor(height / 3);
    barLengthDisplay.value = barLength;

    bobSize = bobSizeRange.value = floor(min(width, height) / 24);
    bobSizeDisplay.value = bobSize;

    initialVelocity = initialVelocityRange.value = 0;
    initialVelocityNumber.value = initialVelocity;

    gravity = gravityRange.value = 4;
    gravityNumber.value = gravity;

    damping = dampingRange.value = 0;
    dampingNumber.value = damping;

    barLengthRange.max = floor(min(width, height) * 0.9);
    bobSizeRange.max = floor(min(width, height) / 4);
}

function setup() {
    const canvas = windowWidth > windowHeight ? (
            createCanvas(windowWidth * 0.75, windowHeight)
        ) : (
            createCanvas(windowWidth, windowHeight * 0.85)
    );
    canvas.parent('canvas-container');
    setInitializeInputValuesAndRanges();
    pendulum = new Pendulum(
        width / 2,
        height / 2 - barLength / 2,
        radians(startAngle),
        barLength,
        bobSize,
        initialVelocity,
        damping
    );
}

function draw() {
    background(223);

    pendulum.render();
    pendulum.update();
}

function windowResized() {
    let w, h;
    if (windowWidth > windowHeight) {
        w = windowWidth * 0.75;
        h = windowHeight;
    } else {
        w = windowWidth;
        h = windowHeight * 0.85;
    }

    resizeCanvas(w, h);
}

function Pendulum(x, y, angle, barLength, bobSize, initialVelocity, damping) {
    this.origin = createVector(x, y);
    this.angle = angle;
    this.position = createVector();
    this.barLength = barLength;
    this.bobSize = bobSize;
    this.damping = damping;
    this.barWeight = 10;
    this.bobColor = 64;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;

    this.render = () => {
        stroke(this.bobColor);
        strokeWeight(this.barWeight);
        fill(this.bobColor);
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        circle(this.position.x, this.position.y, this.bobSize);
    }

    this.update = () => {
        if (mouseIsPressed) {
            this.angle = atan2(mouseX - this.origin.x, mouseY - this.origin.y);
            this.angularVelocity = 0;
        } else {
            this.angularAcceleration = -(gravity * sin(this.angle) / this.barLength);
            this.angularVelocity += this.angularAcceleration;
            this.angle += this.angularVelocity;
            this.angularVelocity *= 1 - (this.damping / 10);
        }
        this.position.x = this.barLength * sin(this.angle) + this.origin.x;
        this.position.y = this.barLength * cos(this.angle) + this.origin.y;
    }
}

startAngleRange.addEventListener('input', event => {
    startAngleNumber.value = event.target.value;
    startAngle = +event.target.value;
    pendulum.angle = startAngle;
});

startAngleNumber.addEventListener('input', event => {
    startAngleRange.value = event.target.value;
    startAngle = +event.target.value;
    pendulum.angle = startAngle;
});

barLengthRange.addEventListener('input', event => {
    barLengthDisplay.value = event.target.value;
    barLength = +event.target.value;
    pendulum.barLength = barLength;
    pendulum.origin.y = height / 2 - barLength / 2;
});

bobSizeRange.addEventListener('input', event => {
    bobSizeDisplay.value = event.target.value;
    bobSize = +event.target.value;
    pendulum.bobSize = bobSize;
});

initialVelocityRange.addEventListener('input', event => {
    initialVelocityNumber.value = event.target.value;
    initialVelocity = +event.target.value;
    pendulum.angularVelocity = initialVelocity;
});

initialVelocityNumber.addEventListener('input', event => {
    initialVelocityRange.value = event.target.value;
    initialVelocity = +event.target.value;
    pendulum.angularVelocity = initialVelocity;
});

gravityRange.addEventListener('input', event => {
    gravityNumber.value = event.target.value;
    gravity = +event.target.value;
});

gravityNumber.addEventListener('input', event => {
    gravityRange.value = event.target.value;
    gravity = +event.target.value;
});

dampingRange.addEventListener('input', event => {
    dampingNumber.value = event.target.value;
    damping = +event.target.value;
    pendulum.damping = damping;
});

dampingNumber.addEventListener('input', event => {
    dampingRange.value = event.target.value;
    damping = +event.target.value;
    pendulum.damping = damping;
});