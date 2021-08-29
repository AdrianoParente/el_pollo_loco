class MoveableObject {
    x = 120;
    y = 250;
    width = 100;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path) {

        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() { }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}