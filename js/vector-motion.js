let movers = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSL, 360, 100, 100);

    for (let i = 0; i < 2; i++) {
        let p = createVector(width / 2 - (i * 100), height / 2);
        let v = createVector(0, 0);
        let m = i * 2 + 2;
        movers.push(new Mover(p, v, m));
    }
}

function draw() {
    background(32);

    let gravity = createVector(0, 3);

    movers.forEach(mover => {
        mover.applyForce(gravity);

        if (mouseIsPressed) {
            let wind = createVector(1, 0);
            mover.applyForce(wind);
        }

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
    this.hslValue = map(this.mass, 2, 4, 50, 30);

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