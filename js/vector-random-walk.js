let walkers = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < 16; i++) {
        let p = createVector(width / 2, height / 2);
        let v = p5.Vector.random2D();
        v.setMag(random(1, 16));
        walkers.push(new Walker(p, v));
    }
    background(128);
}

function draw() {
    walkers.forEach(walker => {
        walker.render();
        walker.update();
    });
}

function Walker(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.prev = pos.copy();
    this.step = min(width, height) / 32;
    this.gray = floor(random(0, 255));
    this.weight = 1;
    this.weightStep = random(-1, 1);

    this.render = () => {
        stroke(this.gray);
        strokeWeight(this.weight);
        line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    }

    this.update = () => {
        this.prev.set(this.pos);
        this.pos.add(this.vel);
        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(1, this.step));

        this.weight += this.weightStep;

        if (this.weight < 1 || this.weight > 5) {
            this.weightStep *= -1;
        }
    }
}