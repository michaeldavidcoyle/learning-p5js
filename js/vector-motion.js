let movers = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSL, 360, 100, 100);

    for (let i = 0; i < 10; i++) {
        let p = createVector(random(width), random(height / 2));
        let v = createVector(random(-25, 25), 0);
        let m = i + 1;
        movers.push(new Mover(p, v, m));
    }
}

function draw() {
    background(32);

    let gravity = createVector(0, 3);

    movers.forEach(mover => {
        let weight = p5.Vector.mult(gravity, mover.mass);
        mover.applyForce(weight);

        if (mouseIsPressed) {
            let wind = createVector(1, 0);
            mover.applyForce(wind);
        }

        mover.friction();
        mover.update();
        mover.contain();
        mover.render();
    });
}

function Mover(pos, vel, mass) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(mass) * 10;
    this.hslValue = map(this.mass, 1, 10, 50, 10);

    this.render = () => {
        noStroke();
        fill(128, 100, this.hslValue);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    this.update = () => {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    this.applyForce = (force) => {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    this.friction = () => {
        let altitude = height - (this.pos.y + this.r);
        if (altitude < 1) {
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);
            let coefficient = 0.1;
            let normal = this.mass;
            friction.setMag(coefficient * normal);
            this.applyForce(friction);
        }
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