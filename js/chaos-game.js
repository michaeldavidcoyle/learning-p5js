const vertices = [];
let randomVertex,
    startPoint,
    nextPoint,
    centerPoint,
    radius,
    third;

function setup() {
    createCanvas(windowWidth, windowHeight);

    centerPoint = {
        x: width / 2,
        y: floor(height * 0.6)
    }

    radius = floor(min(width, height) / 2);
    third = (PI * 2) / 3;

    for (let angle = -PI / 2; angle < PI; angle += third) {
        let v = {
            x: centerPoint.x + cos(angle) * radius,
            y: centerPoint.y + sin(angle) * radius
        }

        vertices.push(v);
    }

    startPoint = {
        x: random(width),
        y: random(height)
    }

    stroke(64);
    strokeWeight(2);
    background(223);
}

function draw() {
    vertices.forEach(vertex => {
        point(vertex.x, vertex.y);
    });

    point(startPoint.x, startPoint.y);

    // select random vertex
    randomVertex = vertices[floor(random(vertices.length))];

    // calculate next point halfway between start point and vertex
    nextPoint = {
        x: (startPoint.x + randomVertex.x) / 2,
        y: (startPoint.y + randomVertex.y) / 2
    };

    point(nextPoint.x, nextPoint.y);

    startPoint = nextPoint;
}