let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let score = 0;

let speed = 6;

let enemys = [];


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

function checkCrash(car, enemy) {
    if ((enemy.x > car.x && enemy.x < car.x + car.width) || (enemy.x < car.x && enemy.x + car.width > car.x)) {
        if ((enemy.y > car.y && enemy.y < car.y + 50) || (enemy.y < car.y && enemy.y + 50 > car.y)) {
            return true;
        }
    }
    return false
}

function checkWin(car, enemys) {
    for (let i = 0; i < enemys.length; i++) {
        if (checkCrash(car, enemys[i])) {
            return true;
        }
    }
    return false;
}


function update() {

    car.draw();

    if (move === "LEFT" && car.x > 0) {
        car.x = car.x - 25;
        move = null;
    } else if (move === "RIGHT" && car.x < 500) {
        car.x = car.x + 25;
        move = null;
    }

    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i].y >= 600) {
            enemys[i].y = i * 50;
            enemys[i].x = Math.random() * 500;
            score += 1
            speed += 0.3;
        } else {
            enemys[i].y += speed;
        }
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    drawRect(0, 0, 500, 600, "#4e555b");

    car.draw();

    for (let i = 0; i < enemys.length; i++) {
        enemy.draw(enemys[i].x, enemys[i].y, enemys[i].width, enemys[i].height);
    }

    if (checkWin(car, enemys)) {
        document.getElementById("gameOver").innerHTML = "GAME OVER";
        document.getElementById("scoreEnd").innerHTML = "Score: " + score;
        clearInterval(game);
    }
}

function start() {
    game = setInterval(update, 100);
    document.getElementById("startGame").style.display = "none";
}

