class Coin extends CollectableObject {

    IMAGES_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor(x,y){
        super();
        this.loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COINS);
        this.animate();
        this.x = x;
        this.y = y;
    };

    /**
     * let the coins sparkle
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS)
        }, 250);
    };

    /**
     * 
     * @param {array} images is an array of images given in the constructor
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };
}