const sidesInput = document.querySelector('#side-count');
const radiusInput = document.querySelector('#radius');
const angleInput = document.querySelector('#start-angle');

let start = -Math.PI / 2;
let stop;
let sideCount = 5;
let step;
let radius;

function setup() {
    createCanvas(innerWidth, innerHeight * 0.75);
    stop = start + TAU;
    radius = min(width, height) / 3;
    step = TAU / sideCount;
}

function draw() {
    background(223);

    beginShape();
    for (let angle = start; angle < stop; angle += step) {
        let p = coordinates(
            {x: width / 2, y: height / 2},
            radius,
            angle
        );
        vertex(p.x, p.y);
    }
    endShape(CLOSE);
}

function coordinates(origin, radius, angle) {
    return {
        x: origin.x + cos(angle) * radius,
        y: origin.y + sin(angle) * radius
    }
}

sidesInput.addEventListener('change', event => {
    console.log(`sides: ${event.target.value}`);
});

radiusInput.addEventListener('change', event => {
    console.log(`radius: ${event.target.value}`);
});

angleInput.addEventListener('change', event => {
    console.log(`angle: ${event.target.value}`);
});