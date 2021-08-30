class ThrowableObject extends MoveableObject {

    constructor() {

        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = 100;
        this.y = 100;
        this.width = 50;
        this.height = 60;
        this.throw(100, 150);
    }



    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);

    }
}