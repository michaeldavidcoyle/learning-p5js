let mover;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let p = createVector(width / 2, height / 2);
    // let v = p5.Vector.random2D();
    let v = createVector(-10, -20);
    // v.setMag(10);
    mover = new Mover(p, v);
}

function draw() {
    background(32);

    let gravity = createVector(0, 3);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
        let wind = createVector(1, 0);
        mover.applyForce(wind);
    }

    mover.update();
    mover.contain();
    mover.render();
}

function Mover(pos, vel) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0, 0);
    this.r = round(min(width, height) * 0.05);

    this.render = () => {
        noStroke();
        fill(0, 160, 64);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    this.update = () => {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    this.applyForce = (force) => {
        this.acc.add(force);
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