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




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkCollisions();
    }


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();

        }, 1000 / 25);
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableobjects.push(bottle);
            this.collectedBottles.pop();
            this.statusBar_bottle.setPercentage(this.collectedBottles.length * 5);
        }
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                if (this.character.isDead()) {
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



                } else {
                    this.statusBar_life.setPercentage(this.character.energy);
                    console.log(this.character.energy);
                }
            }

        });
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle);
                this.level.bottles.splice(bottle, 1);
                this.statusBar_bottle.setPercentage(this.collectedBottles.length * 5);
            }

        });
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.level.coins.splice(coin, 1);
                this.statusBar_money.setPercentage(this.collectedCoins.length * 5);

            }
        });

        this.throwableobjects.forEach((tao) => {
            this.level.enemies.forEach((enemy) => {
                if (tao.isColliding(enemy) && (enemy instanceof Endboss)) {
                    console.log('Treffer EndBoss')
                    enemy.hit();
                    if (enemy.isDead()) {
                        setTimeout(function () {
                            document.getElementById('startScreen').style.display = 'flex';
                            document.getElementById('background-image').style.display = 'none';
                            document.getElementById('backgroundImageGameOver').style.display = 'flex';
                            document.getElementById('canvas').style.display = 'none';
                        }, 3000);

                    } else {

                        enemy.isHurt();
                        this.statusBar_life_enemy.setPercentage(enemy.energy);

                    }
                }
            })
        });
    };
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundobjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableobjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.statusBar_life_enemy);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar_life);
        this.addToMap(this.statusBar_bottle);
        this.addToMap(this.statusBar_money)
        this.ctx.translate(this.camera_x, 0);
        
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })

    }



    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)

        /*   this.ctx.beginPath();
           this.ctx.lineWidth = '5';
           this.ctx.strokeStyle = 'blue';
           this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
           this.ctx.stroke();*/

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

}