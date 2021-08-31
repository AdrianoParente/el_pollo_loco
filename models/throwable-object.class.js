class ThrowableObject extends MoveableObject {

    constructor(x, y) {

        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 60;
        this.throw();
    }



    throw(){
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);

    }
}