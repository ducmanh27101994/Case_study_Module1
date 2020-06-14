let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let car = {
    x: 250,
    y: 550,
    width: 50,
    height: 50,
    color: "red"
};

let enemy = {
    x: Math.random()*500,
    y: 50,
    width: 50,
    height: 50,
    color: "white"
};

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
}

document.addEventListener("keydown",moveCar);
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
}

function start() {
    game = setInterval(update,100);
}