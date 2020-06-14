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

function update() {


}