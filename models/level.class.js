class Level {

    enemies;
    clouds;
    backgroundobjects;
    level_end_x = 3700;
    coins;
    bottles;

    constructor(enemies, clouds, backgroundobjects, coins, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coins = coins;
        this.bottles = bottles;
    };
}