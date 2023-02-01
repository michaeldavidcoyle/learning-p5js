let mover;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    let p = createVector(width / 2, height / 2);
    let v = createVector(0, 0);
    let m = 10;
    let hsl = {
            h: 0,
            s: 0,
            l: 50
        }
    mover = new Mover(p, v, m, hsl);

    colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
    background(0, 0, 15, 0.1);

    let deltaAngle = PI / 64;
    if (keyIsDown(LEFT_ARROW)) {
        mover.angle -= deltaAngle;
    } else if (keyIsDown(RIGHT_ARROW)) {
        mover.angle += deltaAngle;
    }

    mover.render();
    mover.update();
}

// adapted from The Nature of Code by Daniel Shiffman

function Mover(pos, vel, mass, hsl) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(mass) * 4;
    this.hsl = hsl;
    this.angle = 0;
    // this.angleV = 0;
    // this.angleA = 0.001;

    this.render = () => {
        noStroke();
        fill(this.hsl.h, this.hsl.s, this.hsl.l);

        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        triangle(-this.r, this.r / 2, -this.r, -this.r / 2, this.r, 0);
        pop();
    }

    this.update = () => {
        // this.vel.add(this.acc);
        this.vel = p5.Vector.fromAngle(this.angle);
        // thruster
        if (keyIsDown(UP_ARROW)) {
            this.vel.mult(3);
        }
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

    /*this.friction = () => {
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
    }*/

    /*this.contain = () => {
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
    }*/
}