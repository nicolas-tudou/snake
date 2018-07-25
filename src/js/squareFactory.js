function SquareFactory() {

}

SquareFactory.create = function (type, x, y, color) {
    if(typeof(SquareFactory.prototype[type]) == 'undefined') {
        console.log('not this type');
    }
    if(SquareFactory.prototype[type].prototype.__proto__ != SquareFactory.prototype) {
        jsUtil.inherit(SquareFactory.prototype[type], SquareFactory)
    }
    var newSquare = new SquareFactory.prototype[type](x, y, color);
    return newSquare;
}

SquareFactory.prototype.init = function (square, color, touchaenum) {
    square.viewContent.style.position = 'absolute';
    square.viewContent.style.left = square.x * SQUARE_WITH + 'px';
    square.viewContent.style.top = square.y * SQUARE_WITH + 'px';
    square.viewContent.style.width = SQUARE_WITH + 'px';
    square.viewContent.style.height = SQUARE_WITH + 'px';
    square.viewContent.style.backgroundColor = color;
    square.touch = function () {
        return touchaenum;
    }
}

//生产floor
SquareFactory.prototype.Floor = function (x, y, color) {
    var floor = new Floor(x, y, SQUARE_WITH, SQUARE_WITH, document.createElement('div'));
    this.init(floor, color, TOUCHENUM.MOVE)
    return floor;
}

//生产food
SquareFactory.prototype.Stone = function (x, y, color) {
    var stone = new Stone(x, y, SQUARE_WITH, SQUARE_WITH, document.createElement('div'));
    this.init(stone, color, TOUCHENUM.DIE)
    return stone;
}

//生产snakeHead
SquareFactory.prototype.Food = function (x, y, color) {
    var food = new Food(x, y, SQUARE_WITH, SQUARE_WITH, document.createElement('div'));
    food.x = x;
    food.y = y;
    this.init(food, color, TOUCHENUM.EAT)
    return food;
}

//生产snakeBody
SquareFactory.prototype.SnakeHead = function (x, y, color) {
    var snakeHead = new SnakeHead(x, y, SQUARE_WITH, SQUARE_WITH, document.createElement('div'));
    snakeHead.x = x;
    snakeHead.y = y;
    this.init(snakeHead, color, TOUCHENUM.DIE)
    return snakeHead;
}

//生产stone
SquareFactory.prototype.SnakeBody = function (x, y, color) {
    var snakeBody = new SnakeBody(x, y, SQUARE_WITH, SQUARE_WITH, document.createElement('div'));
    this.init(snakeBody, color, TOUCHENUM.DIE)
    return snakeBody;
}
