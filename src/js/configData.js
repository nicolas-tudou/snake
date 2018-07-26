var XLEN = 30, //格子横排数量
    YLEN = 30, //格子竖排数量
    SQUARE_WITH = 25, // 格子宽度
    BASE_POSITION_X = 200, //left
    BASE_POSITION_Y = 100, //top
    INTERVAL = 300; //游戏难度，每隔多长时间前进一格

//基础类
function Square(x, y, width, height, dom) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 100;
    this.height = height || 100;
    this.viewContent = dom || document.createElement('div');
}
Square.prototype.touch = function() {
}

var Food = jsUtil.extends(Square);

//蛇能走的区域小格
var Floor = jsUtil.extends(Square);

//食物
var Food = jsUtil.single(Square);

//蛇头
var SnakeHead = jsUtil.single(Square);

//蛇身
var SnakeBody = jsUtil.extends(Square);

//障碍物
var Stone = jsUtil.extends(Square);

//游戏场地
var Ground = jsUtil.single(Square);

//蛇
var Snake = jsUtil.single();

var TOUCHENUM = {
    MOVE: 'MOVE',
    EAT: 'EAT',
    DIE: 'DIE'
}