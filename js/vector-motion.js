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