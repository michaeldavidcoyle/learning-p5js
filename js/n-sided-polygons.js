const form = document.querySelector('form');
const xInput = document.querySelector('#center-x');
const yInput = document.querySelector('#center-y');
const sidesInput = document.querySelector('#side-count');
const radiusInput = document.querySelector('#radius');
const angleInput = document.querySelector('#start-angle');
const strokeWeightInput = document.querySelector('#stroke-weight');
const strokeColorInput = document.querySelector('#stroke-color');
const fillColorInput = document.querySelector('#fill-color');
const controlWidth = document.querySelector('.controls').clientWidth;
const controlHeight = document.querySelector('.controls').clientHeight;

const shapes = [];

function setup() {
    const canvas = windowWidth > windowHeight ? (
        createCanvas(windowWidth - controlWidth, windowHeight)
    ) : (
        createCanvas(windowWidth, windowHeight - controlHeight)
    );
    canvas.parent('canvas-container');
}

function draw() {
    background(223);
    shapes.forEach(shape => shape.render());
}

function coordinates(origin, radius, angle) {
    return {
        x: origin.x + cos(angle) * radius,
        y: origin.y + sin(angle) * radius
    }
}

function Polygon(center, sides, radius, start, sWeight, sColor, fColor) {
    this.center = center;
    this.sides = sides;
    this.radius = radius;
    this.start = start;
    this.sWeight = sWeight;
    this.sColor = sColor;
    this.fColor = fColor;

    this.render = () => {
        let stop = this.start + TAU;
        let step = TAU / this.sides;
        if (this.sWeight == 0) {
            noStroke();
        } else {
            strokeWeight(this.sWeight);
            stroke(this.sColor);
        }
        fill(this.fColor);
        beginShape();
        for (let angle = this.start; angle < stop; angle += step) {
            let p = coordinates(
                {x: this.center.x, y: this.center.y},
                this.radius,
                angle
            );
            vertex(p.x, p.y);
        }
        endShape(CLOSE);
    }
}

form.addEventListener('submit', () => {
    event.preventDefault();
    let center = {
            x: +xInput.value,
            y: +yInput.value
        },
        sides = +sidesInput.value,
        radius = +radiusInput.value,
        start = radians(+angleInput.value),
        sWeight = +strokeWeightInput.value,
        sColor = strokeColorInput.value,
        fColor = fillColorInput.value;

    let shape = new Polygon(center, sides, radius, start, sWeight, sColor, fColor);
    shapes.push(shape);
});