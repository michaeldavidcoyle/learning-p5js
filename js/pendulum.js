let pendulum;
let gravity = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pendulum = new Pendulum(width/2, height/5, PI/4, height/2, height/16, 8, 64);
}

function draw() {
    background(223);

    pendulum.render();
    pendulum.update();
}

function Pendulum(x, y, angle, barLength, bobSize, barWeight=8, bobColor=64) {
    this.origin = createVector(x, y);
    this.angle = angle;
    this.position = createVector();
    this.barLength = barLength;
    this.bobSize = bobSize;
    this.barWeight = barWeight;
    this.bobColor = bobColor;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;

    this.render = () => {
        stroke(bobColor);
        strokeWeight(barWeight);
        fill(bobColor);
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
        }
        this.position.x = this.barLength * sin(this.angle) + this.origin.x;
        this.position.y = this.barLength * cos(this.angle) + this.origin.y;
    }
}