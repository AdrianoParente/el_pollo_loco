class Chicken extends MoveableObject {
    
    height = 60;
    width = 60; 
    y = 360;
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png')

        this.x = 200 + Math.random() * 500;
    }
}

