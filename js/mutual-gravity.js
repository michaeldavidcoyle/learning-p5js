let movers = [];
let sun;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    let inside = min(width, height) / 3;
    let outside = inside + 25;

    let p = createVector(0, 0);
    let v = createVector(0, 0);
    sun = new Mover(p, v, 32);

    for (let i = 0; i < 16; i++) {
        let p = p5.Vector.random2D();
        let v = p.copy();
        v.setMag(5);
        p.setMag(random(inside, outside));
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