let mover;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let p = createVector(width / 2, height / 2);
    let v = p5.Vector.random2D();
    v.setMag(10);
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
    this.r = round(min(width, height) * 0.05);

    this.render = () => {
        noStroke();
        fill(0, 160, 64);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    this.update = () => {
        this.pos.add(this.vel);
        this.contain();
    }

    this.contain = () => {
        if (this.pos.x - this.r < 0) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }

        if (this.pos.x + this.r > width) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        }

        if (this.pos.y - this.r < 0) {
            this.pos.y = this.r;
            this.vel.y *= -1;
        }

        if (this.pos.y + this.r > height) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }
    }
}