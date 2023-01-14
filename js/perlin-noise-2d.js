let inc = 0.0025;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1);
}

function draw() {
    noLoop();

    let offsetY = 0;

    loadPixels();
    for (let y = 0; y < height; y++) {
        let offsetX = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            let gray = noise(offsetX, offsetY) * 255;
            pixels[index] = gray;
            pixels[index + 1] = gray;
            pixels[index + 2] = gray;
            pixels[index + 3] = 255;

            offsetX += inc;
        }
        offsetY += inc;
    }
    updatePixels();
}