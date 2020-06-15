let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let score = 0;

let speed = 7;

let enemys = [];

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
        if ((enemy.y > car.y && enemy.y < car.y + car.height) || (enemy.y < car.y && enemy.y + enemy.height > car.y)) {
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
            enemys[i].x = Math.random() * 450;
            score += 1
            speed += 0.3;
        } else {
            enemys[i].y += speed;
        }
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    backgroundImg.draw();

    car.draw();

    enemy.draw()

    if (checkWin(car, enemys)) {
        document.getElementById("gameOver").innerHTML = "GAME OVER";
        document.getElementById("scoreEnd").innerHTML = "Score: " + score;
        clearInterval(game);
        document.getElementById("restartGame").innerHTML = `<button class="button" onclick="restart()" style="position: absolute; top:400px; left: 180px; z-index: 1">Restart</button>`

    }
}

function restart(){
    location.reload();
}

function start() {
    game = setInterval(update, 100);
    document.getElementById("startGame").style.display = "none";
}

