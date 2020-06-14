let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let score = 0;
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

let speed = 10;
let enemy = [];
for (let i = 0; i < 5; i++) {
    enemy[i] = {
        x: Math.random() * 500,
        y: i * 50,
        width: 50,
        height: 50,
        color: "white"
    };
}


function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}


document.addEventListener("keydown", moveCar);
let move;

function moveCar(evt) {
    let key = evt.keyCode;
    if (key === 37) {
        move = "LEFT";
    } else if (key === 39) {
        move = "RIGHT";
    }
}


function checkWin(car, enemy) {
    for (let i = 0; i < 5; i++) {
        if ((enemy[i].x > car.x && enemy[i].x < car.x + 50) || (enemy[i].x < car.x && enemy[i].x + 50 > car.x)) {
            if ((enemy[i].y > car.y && enemy[i].y < car.y + 50) || (enemy[i].y < car.y && enemy[i].y + 50 > car.y)) {
                return true;
            }
        }
    }
    return false;
}


function update() {
    drawRect(car.x, car.y, car.width, car.height, car.color);

    if (move === "LEFT" && car.x > 0) {
        car.x = car.x - 25;
        move = null;
    } else if (move === "RIGHT" && car.x < 500) {
        car.x = car.x + 25;
        move = null;
    }
    //Tạo ra enemy mới với tọa độ bất kỳ, và tốc độ tăng dần
    for (let i = 0; i < 5; i++) {
        if (enemy[i].y >= 600) {
            enemy[i].y = i * 50;
            enemy[i].x = Math.random() * 500;
            score += 1
            speed += 0.3;
        } else {
            enemy[i].y += speed;
        }
    }

    drawRect(0, 0, 500, 600, "black");

    drawRect(car.x, car.y, car.width, car.height, car.color);

    for (let i = 0; i < 5; i++) {
        drawRect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height, enemy[i].color);
    }

    if (checkWin(car, enemy)) {
        clearInterval(game); //Kết thúc game tại thời điểm xảy ra va chạm
        text1 = "GAME OVER"
        text2 = "Score: " + score;
        ctx.fillStyle = "while";
        ctx.font = "45px Roboto";
        ctx.fillText(text1, 120, 170);
        ctx.fillText(text2, 170, 225);

    }
}

function start() {
    game = setInterval(update, 100);
}

