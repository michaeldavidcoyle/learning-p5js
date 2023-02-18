let diameter;
let waves = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    diameter = 8;
    for (let i = 0; i < 5; i++) {
        waves.push(
            new Wave(random(height/6), random(width/10, width/2), random(width/3))
        );
    }
    stroke(160, 160, 144);
    strokeWeight(4);
    fill(160, 160, 144);
}

function draw() {
    background(32);

    for (let x = 0; x < width; x += 10) {
        let y = 0;
        waves.forEach(wave => {
            y += wave.evaluate(x);
        });
        circle(x, y + height / 2, diameter);
    }

    waves.forEach(wave => {
        wave.update();
    })
}

function Wave(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;

    this.evaluate = (x) => {
        return sin(this.phase + TAU * x / this.period) * this.amplitude;
    }

    this.update = () => {
        this.phase += 0.1;
    }
}