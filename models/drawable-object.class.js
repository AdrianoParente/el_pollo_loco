class DrawableObject {

    x = 120;
    y = 250;
    width = 100;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    draw(ctx) {
        //console.log(this.img);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

}