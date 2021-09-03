class ThrowableObject extends MoveableObject {

    IMAGES_THROWN = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];

    IMAGES_HITTEN = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];

    constructor(x, y) {

        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_THROWN);
        this.loadImages(this.IMAGES_HITTEN);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 60;
        this.throw();

    }



    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
        setInterval(() => {
            this.playAnimation(this.IMAGES_THROWN);
        }, 100);
    }

}