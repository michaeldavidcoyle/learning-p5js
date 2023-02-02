const sidesInput = document.querySelector('#side-count');
const radiusInput = document.querySelector('#radius');
const angleInput = document.querySelector('#start-angle');
const strokeWeightInput = document.querySelector('#stroke-weight');
const strokeColorInput = document.querySelector('#stroke-color');
const fillColorInput = document.querySelector('#fill-color');

let start = angleInput.value;
let stop;
let sideCount = sidesInput.value;
let step;
let radius = radiusInput.value;
let thickness = strokeWeightInput.value;
let strokeColor = '#000';
let fillColor = '#fff';

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
    if (thickness == 0) {
        noStroke();
    } else {
        strokeWeight(thickness);
        stroke(strokeColor);
    }
    fill(fillColor);
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

strokeWeightInput.addEventListener('change', event => {
    thickness = event.target.value;
});

strokeColorInput.addEventListener('change', event => {
    strokeColor = event.target.value;
});

fillColorInput.addEventListener('change', event => {
    fillColor = event.target.value;
});