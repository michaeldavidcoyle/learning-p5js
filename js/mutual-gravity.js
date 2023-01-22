let movers = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for (let i = 0; i < 2; i++) {
        let p = createVector(width / 2, i * height / 3 + height / 3);
        let v = (i % 2 === 0) ? createVector(1, 0) : createVector(-1, 0);
        v.setMag(2);
        let m = 5;
        movers.push(new Mover(p, v, m));
    }

    colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
    background(0, 0, 15);

    movers.forEach(mover => {
        mover.render();
        mover.update();

        for (let i = 0; i < movers.length; i++) {
            if (mover !== movers[i]) {
                mover.attract(movers[i]);
            }
        }
    })
}