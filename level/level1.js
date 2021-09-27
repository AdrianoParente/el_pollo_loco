const level1 = new Level(

    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()

    ],

    [
        new Clouds(250),
        new Clouds(750),
        new Clouds(1250),
        new Clouds(1750),
        new Clouds(2250),
        new Clouds(2750),
        new Clouds(3250),
        new Clouds(3750),
    ],

    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 5),

    ],
    [

        new Coin(300, 300),
        new Coin(180, 80),
        new Coin(710, 230),
        new Coin(900, 210),
        new Coin(1080, 80),
        new Coin(1200, 150),
        new Coin(1350, 180),
        new Coin(1530, 240),
        new Coin(1720, 220),
        new Coin(1960, 190),
        new Coin(2140, 180),
        new Coin(2300, 80),
        new Coin(2450, 340),
        new Coin(2600, 250),
        new Coin(2750, 320),
        new Coin(3000, 80),
        new Coin(3090, 340),
        new Coin(3210, 295),
        new Coin(3290, 310),
        new Coin(3350, 80),
        


    ],
    [
        new Bottle(300, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(400, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(600, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(800, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(1000, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(1100, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(1500, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(1800, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(2000, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(2100, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(2200, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(2300, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(2450, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(2600, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(2780, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(2900, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(3000, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(3100, 363, 'img/6.botella/2.Botella_enterrada2.png'),
        new Bottle(3200, 363, 'img/6.botella/2.Botella_enterrada1.png'),
        new Bottle(3400, 363, 'img/6.botella/2.Botella_enterrada2.png')


    ]



);