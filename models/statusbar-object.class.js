class StatusBarObject extends DrawableObject {

    IMAGES1 = [

        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ];

    IMAGES2 = [
        
          'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
          'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
          'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
          'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
          'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
          'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];

    IMAGES3 = [

        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',

    ];

    IMAGES4 = [

        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png',
    ];


    percentage;
    image = [];

    constructor(x, y, percent, i) {
        super();
        this.image = this.setImageArray(i);
        this.loadImages(this.image);
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 40;
        this.setPercentage(percent);

    }

    setImageArray(i) {
        console.log(i);
        if (i == 1) {
            return this.IMAGES1
        }
        else if (i == 2) {
            return this.IMAGES2
        }
        else if (i == 3) {
            return this.IMAGES3
        }
        else if (i == 4) {
            return this.IMAGES4
        }

    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.image[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {

        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 0) {
            return 0;
        }
        else
         return 0;
    }
}
