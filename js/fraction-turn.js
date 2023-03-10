// Inspired by Numberphile's The Golden Ratio (why it is so irrational)
// https://www.youtube.com/watch?v=sj8Sg8qnjOg

const fractionInput = document.querySelector('#fraction');
const seedSizeInput = document.querySelector('#max-seed-size');
const finalRadiusInput = document.querySelector('#final-radius');
const increaseInput = document.querySelector('#increase');
const decreaseInput = document.querySelector('#decrease');
const stepDisplay = document.querySelector('#step-display');

const controlWidth = document.querySelector('.controls').clientWidth;
const controlHeight = document.querySelector('.controls').clientHeight;

const midpoint = {
    x: null,
    y: null
}

let maxSeedSize,
    angle,
    radius,
    factor,
    turn,
    end;

function setup() {
    const canvas = windowWidth > windowHeight ? (
        createCanvas(windowWidth - controlWidth, windowHeight)
    ) : (
        createCanvas(windowWidth, windowHeight - controlHeight)
    );
    canvas.parent('canvas-container');

    midpoint.x = width / 2;
    midpoint.y = height / 2;
    angle = 0;
    radius = 0;

    stroke(80, 80, 64)
    fill(128, 128, 98);
}

function draw() {
    background(198, 165, 133);
    angle = 0;
    for (let radius = 0; radius < end; radius += 0.1) {
        x = midpoint.x + sin(angle) * radius;
        y = midpoint.y + cos(angle) * radius;

        let seedSize = map(radius, 0, end, 1, maxSeedSize);
        circle(x, y, seedSize);

        angle += turn;
    }
    noLoop();
}

function setFactors(fraction, size, finalRadius) {
    factor = fraction;
    turn = TAU * factor;
    maxSeedSize = size;
    end = finalRadius;
}

fractionInput.addEventListener('change', event => {
   setFactors(event.target.value, seedSizeInput.value, finalRadiusInput.value);
   redraw();
});

seedSizeInput.addEventListener('change', event => {
    setFactors(fractionInput.value, event.target.value, finalRadiusInput.value);
    redraw();
});

finalRadiusInput.addEventListener('change', event => {
    setFactors(fractionInput.value, seedSizeInput.value, event.target.value);
    redraw();
});

increaseInput.addEventListener('click', () => {
    let step = fractionInput.step;
    if (step < 0.1) {
        step = step.replace('01', '1');
    }
    fractionInput.step = step;
    stepDisplay.innerText = step;
});

decreaseInput.addEventListener('click', () => {
   let step = fractionInput.step;
   if (step > 0.000001) {
       step = step.replace('1', '01');
   }
   fractionInput.step = step;
   stepDisplay.innerText = step;
});