// adapted from The Nature of Code by Daniel Shiffman

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

    this.attract = (mover) => {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = force.magSq();
        let G = 100;
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