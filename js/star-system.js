let movers = [];
let sun;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    let p = createVector(0, 0);
    let v = createVector(0, 0);
    sun = new Mover(p, v, 32);

    for (let i = 0; i < 8; i++) {
        let p = createVector(i * 32 + 100, 0);
        let v = p.copy();
        v.setMag(i * 0.5 + 1);
        v.rotate(PI / 2);
        let m = random(1, 4);
        movers.push(new Mover(p, v, m));
    }

    colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
    background(0, 0, 15);

    translate(width / 2, height / 2);
    fill(42, 100, 50);
    circle(sun.pos.x, sun.pos.y, sun.r * 2);

    movers.forEach(mover => {
        mover.render();
        mover.update();

        for (let i = 0; i < movers.length; i++) {
            sun.attract(mover);

            if (mover !== movers[i]) {
                mover.attract(movers[i]);
            }
        }
    })
}

// adapted from The Nature of Code by Daniel Shiffman

function Mover(pos, vel, mass) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(mass) * 4;
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

    this.attract = (mover) => {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = constrain(force.magSq(), 25, 2500);
        let G = 0.5;
        let strength = G * (this.mass * mover.mass) / distanceSq;
        force.setMag(strength);
        mover.applyForce(force);
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