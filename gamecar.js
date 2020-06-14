let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let car = {
    x: 250,
    y: 550,
    width: 50,
    height: 50,
    color: "red"
};


let speed = 10;
let enemy = [];
for (let i = 0; i < 5; i++) {
    enemy[i] = {
        x: Math.random() * 500,
        y: 50,
        width: 50,
        height: 50,
        color: "white"
    };
}


function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
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
            speed += 0.5;
        } else {
            enemy[i].y += speed;
        }
    }
}


function start() {
    game = setInterval(update, 100);
}