oGround.init();
snake.init(oGround)
oGround.randomFood();

var timer = setInterval(function () {
    var nextFloor = oGround.SquareTable[snake.head.y + snake.direction.y][snake.head.x + snake.direction.x]
    snake.snakeAction[nextFloor.touch()](oGround);
}, INTERVAL)

var lastTime = 0;
document.onkeydown = function (e) {
    if(new Date().getTime() - lastTime > 300) {
        if(e.which == 37 && snake.direction != DIRECTIONENUM.RIGHT) {
            snake.direction = DIRECTIONENUM.LEFT;
        }else if(e.which == 38 && snake.direction != DIRECTIONENUM.DOWN) {
            snake.direction = DIRECTIONENUM.UP;
        }else if(e.which == 39 && snake.direction != DIRECTIONENUM.LEFT) {
            snake.direction = DIRECTIONENUM.RIGHT;
        }else if(e.which == 40 && snake.direction != DIRECTIONENUM.UP) {
            snake.direction = DIRECTIONENUM.DOWN;
        }
    }
    lastTime = new Date().getTime();
}