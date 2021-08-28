class Clouds extends MoveableObject{

    
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png')
        this.y = 50;
        this.x = 200 + Math.random() * 500;
    }
}