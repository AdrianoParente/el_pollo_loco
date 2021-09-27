class MoveableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    /**
     * sets gravity
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };

    /**
     * 
     * @returns height of the character to proof if he jumps or not
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 140
        }
    };

    /**
     * 
     * @param {object} mo 
     * @returns colliding points
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    };

    /**
     * sets energy level if object is hitten
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    /**
     * 
     * @returns boolean to set object in status dead
     */
    isDead() {
        return this.energy == 0;
    };

    /**
     * 
     * @returns time for display the hurt image array
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
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

    /**
     * moves right
     */
    moveRight() {
        this.x += this.speed;
    };

    /**
     * moves left
     */
    moveLeft() {
        this.x -= this.speed;
    };

    /**
     * jump
     */
    jump() {
        this.speedY = 30;
    };
}