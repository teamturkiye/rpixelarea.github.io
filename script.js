// script.js

const PIXEL_COOLDOWN = 10000; // 10 seconds cooldown
let lastPixelPlacement = 0;

function placePixel(x, y, color) {
    const currentTime = Date.now();
    if (currentTime - lastPixelPlacement < PIXEL_COOLDOWN) {
        console.log('Please wait before placing another pixel.');
        return;
    }

    // Place the pixel logic here
    // (pseudo code)
    // canvas.setPixel(x, y, color);
    
    lastPixelPlacement = currentTime;
    updateCanvas();
}

function updateCanvas() {
    // Logic to update the canvas instantly after placing a pixel
}

function validateChatInput(input) {
    const englishRegex = /^[a-zA-Z0-9\s.,!?]*$/;
    if (!englishRegex.test(input)) {
        console.log('Only English characters are allowed.');
        return false;
    }
    return true;
}