class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar_life = new StatusBarObject(30, 0, 100, 1);
    statusBar_bottle = new StatusBarObject(30, 40, 1, 2);
    statusBar_money = new StatusBarObject(30, 80, 1, 3);
    statusBar_life_enemy = new StatusBarObject(3700, 0, 100, 4);
    throwableobjects = [];
    collectedBottles = [];
    collectedCoins = [];
    collect_coin = new Audio('audio/collect_coin.mp3');
    collect_bottle = new Audio('audio/collect_bottle.mp3');
    winner_sound = new Audio('audio/winner_sound.mp3');
    looser_sound = new Audio('audio/looser_sound.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollisions();
    };

    setWorld() {
        this.character.world = this;
    };

    /**
     * checks in intervals all collisions and objects be thrown 
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 1000 / 25);
        setInterval(() => {
            this.checkThrowObjects();
        }, 200);
    };

    /**
     * throws bottle by preesing d if enough bottles were collected; increase statusbar
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableobjects.push(bottle);
            this.collectedBottles.pop();
            this.statusBar_bottle.setPercentage(this.collectedBottles.length * 5);
        };
    };

    /**
     * checks all collisions
     */
    checkCollisions() {
        this.checkCollisionsEnemy();
        this.checkCollisionsBottles();
        this.checkCollisionsCoins();
        this.checkCollisionsEndboss();
    };

    /**
     * checks collisions with enemies, sets the character in status hitten or dead; decrease statusbar
     */
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                if (this.character.isDead()) {
                    this.displayYouLost();
                } else {
                    this.statusBar_life.setPercentage(this.character.energy);
                }
            }
        });
    };

    /**
     * displays screen when player loose
     */
    displayYouLost() {
        this.looser_sound.play();
        setTimeout(function () {
            document.getElementById('startScreen').style.display = 'flex';
            document.getElementById('background-image').style.display = 'none';
            document.getElementById('canvas').style.display = 'none';
            document.getElementById('backgroundImageGameOver').style.display = 'none';
            document.getElementById('backgroundImageYouLost').style.display = 'flex';
            setTimeout(function () {
                document.getElementById('backgroundImageGameOver').style.display = 'flex';
                document.getElementById('backgroundImageYouLost').style.display = 'none';
            }, 2000);
        }, 3000);
    };

    /**
     * checks collision with bottles to collect them; increase statusbar
     */
    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle);
                this.level.bottles.splice(bottle, 1);
                this.statusBar_bottle.setPercentage(this.collectedBottles.length * 5);
                this.collect_bottle.play();
            }
        });
    };

    /**
    * checks collision with coins to collect them; increase statusbar
    */
    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.level.coins.splice(coin, 1);
                this.statusBar_money.setPercentage(this.collectedCoins.length * 5);
                this.collect_coin.play();
            }
        });
    };

    /**
    * checks collision of bottles with the endboss; decrease statusbar if boss is hitten or death
    */
    checkCollisionsEndboss() {
        this.throwableobjects.forEach((tao) => {
            this.level.enemies.forEach((enemy) => {
                if (tao.isColliding(enemy) && (enemy instanceof Endboss)) {
                    enemy.hit();
                    if (enemy.isDead()) {
                        this.displayEnemyIsDead();
                    } else {
                        enemy.isHurt();
                        this.statusBar_life_enemy.setPercentage(enemy.energy);
                    }
                };
            });
        });
    };

    /**
     * displays screen when endboss is beaten
     */
    displayEnemyIsDead() {
        this.winner_sound.play();
        setTimeout(function () {
            document.getElementById('startScreen').style.display = 'flex';
            document.getElementById('background-image').style.display = 'none';
            document.getElementById('backgroundImageGameOver').style.display = 'flex';
            document.getElementById('canvas').style.display = 'none';
        }, 3000);
    };

    /**
     * draws all objects
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundobjects);
        this.drawFrontObjects();
        this.drawMoveableStatusbar();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

     /**
     * draws moveable objects
     */
    drawMoveableStatusbar() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar_life);
        this.addToMap(this.statusBar_bottle);
        this.addToMap(this.statusBar_money)
        this.ctx.translate(this.camera_x, 0);
    };

     /**
     * draws front objects
     */
    drawFrontObjects() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableobjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.statusBar_life_enemy);
    };

    /**
     * 
     * @param {object} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)

        /* this.ctx.beginPath();
           this.ctx.lineWidth = '5';
           this.ctx.strokeStyle = 'blue';
           this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
           this.ctx.stroke(); */

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        };
    };

    /**
     * 
     * @param {object} mo change displayed direction of an object 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };

    /**
     * 
     * @param {array} objects array of objects
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    };
}