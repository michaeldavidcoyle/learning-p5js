const branchAngleInput = document.querySelector('#branch-angle');
const lengthFactorInput = document.querySelector('#length-factor');
const weightFactorInput = document.querySelector('#weight-factor');

let turn;
let x, y;
let lengthFactor;
let weightFactor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height - height / 10;
    turn = radians(+branchAngleInput.value);
    lengthFactor = +lengthFactorInput.value;
    weightFactor = +weightFactorInput.value;
}

function draw() {
    noLoop();
    background(223);
    branch(x, y, 150, -PI / 2, 12);
}
function branch(x, y, length, angle, weight) {
    let endX = x + cos(angle) * length;
    let endY = y + sin(angle) * length;

    strokeWeight(weight);
    line(x, y, endX, endY);

    if (length > 3) {
        let nextLength = length * lengthFactor;
        let angleA = angle + turn;
        let angleB = angle - turn;
        let nextWeight = weight * weightFactor;

        branch(endX, endY, nextLength, angleA, nextWeight);
        branch(endX, endY, nextLength, angleB, nextWeight);
    }
}
