class Enemy {
    constructor(x,y,width,height) {
        this.x = Math.random() * 500;
        this.y = 50;
        this.height = height;
        this.width = width;

    }
    draw(){
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = 'image/stone.png';
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
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

}

let enemy = new Enemy(Math.random() * 500,50,50,50);

for (let i = 0; i < 5; i++) {
    enemys.push(enemy)
}