let mover;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let p = createVector(width / 2, height / 2);
    let v = createVector(1, 0);
    mover = new Mover(p, v);
}

function draw() {
    background(32);
    mover.render();
    mover.update();
}

function Mover(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.r = 32;

    this.render = () => {
        noStroke();
        fill(0, 160, 64);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    this.update = () => {
        this.pos.add(this.vel);
    }
}