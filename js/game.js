let canvas;
let world;
let keyboard = new Keyboard();
let isFullscreen = false;

/**
 * initialize a new world
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * calls function init and change display from start screen to canvas; displays new control buttons
 */
function start() {
    init();
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('canvas').style.display = 'flex';
    document.getElementById('fullscreen').style.display = 'flex';
    document.getElementById('control').style.display = 'flex';
    document.getElementById('tryAgain').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
};

/**
 * change to fullscreen mode
 */
function showFullScreen() {
    if (isFullscreen == false) {
        canvas.requestFullscreen();
        isFullscreen = true;
    } else {
        document.exitFullscreen();
        isFullscreen = false;
    }
};

/**
 * enable and disable control advice panel
 */
function showControl() {
    document.querySelector('.d-none').classList.toggle('d-flex');
};

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
})
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
})