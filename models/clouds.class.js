class Clouds extends MoveableObject {

  y = 20;
  width = 500;
  height = 250;

  constructor(x) {
    super().loadImage('img/5.Fondo/Capas/4.nubes/1.png')
    this.x = x;
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 50);
  }
}