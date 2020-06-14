let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let score = 0;
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


function checkWin(car,enemy) {
    for (let i = 0; i < 5 ; i++) {
        if ((enemy[i].x > car.x && car.x +50 > enemy[i]) || (enemy[i].x < car.x && enemy[i] + 50 > car.x)) {
            if ((enemy[i].y > car.y && enemy[i] < car.y + 50) || (enemy[i].y < car.y && enemy[i] + 50 > car.y)) {
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

}


function start() {
    game = setInterval(update, 100);
}