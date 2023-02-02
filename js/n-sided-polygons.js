const sidesInput = document.querySelector('#side-count');
const radiusInput = document.querySelector('#radius');
const angleInput = document.querySelector('#start-angle');

let start = 0;
let stop;
let sideCount = 3;
let step;
let radius;

function setup() {
    const controlHeight = document.querySelector('.controls').clientHeight;
    createCanvas(innerWidth, innerHeight - controlHeight);
    radius = 100;
}

function draw() {
    background(223);
    polygon(sideCount, radians(start), radius);
}

function coordinates(origin, radius, angle) {
    return {
        x: origin.x + cos(angle) * radius,
        y: origin.y + sin(angle) * radius
    }
}

function polygon(sides, start, radius) {
    stop = start + TAU;
    step = TAU / sides;
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

sidesInput.addEventListener('change', event => {
    sideCount = event.target.value;
});

radiusInput.addEventListener('change', event => {
    radius = event.target.value;
});

angleInput.addEventListener('change', event => {
    start = event.target.value;
});