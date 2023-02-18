let diameter;
let wave;

function setup() {
    createCanvas(windowWidth, windowHeight);
    diameter = 16;
    wave = new Wave(height / 4, width / 2, 0);
    stroke(160, 160, 144);
    strokeWeight(4);
    fill(160, 160, 144);
}

function draw() {
    background(32);

    for (let x = 0; x < width; x += 10) {
        let y = wave.evaluate(x);
        circle(x, y + height / 2, diameter);
    }
}

function Wave(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;

    this.evaluate = (x) => {
        return sin(this.phase + TAU * x / this.period) * this.amplitude;
    }
}