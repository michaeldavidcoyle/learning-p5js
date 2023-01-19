let walker;
let previous;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let p = createVector(width / 2, height / 2);
    let v = p5.Vector.random2D();
    v.setMag(random(1, 16));
    walker = new Walker(p, v);
    background(247);
}

function draw() {
    walker.render();
    walker.update();
}

function Walker(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.prev = pos.copy();
    this.step = min(width, height) / 32;

    this.render = () => {
        stroke(64);
        line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    }

    this.update = () => {
        this.prev.set(this.pos);
        this.pos.add(this.vel);
        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(1, this.step));
    }
}