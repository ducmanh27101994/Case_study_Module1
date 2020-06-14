class Car {
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y){
        this.y = y;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let car = new Car(200,550,50,50,"red");
let x = car.getX();
let y = car.getY();
let width = car.getWidth();
let height = car.getHeight();
let color = car.getColor();