var XLEN = 30, //���Ӻ�������
    YLEN = 30, //������������
    SQUARE_WITH = 25, // ���ӿ��
    BASE_POSITION_X = 200, //left
    BASE_POSITION_Y = 100, //top
    INTERVAL = 300; //��Ϸ�Ѷȣ�ÿ���೤ʱ��ǰ��һ��

//������
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

//�����ߵ�����С��
var Floor = jsUtil.extends(Square);

//ʳ��
var Food = jsUtil.single(Square);

//��ͷ
var SnakeHead = jsUtil.single(Square);

//����
var SnakeBody = jsUtil.extends(Square);

//�ϰ���
var Stone = jsUtil.extends(Square);

//��Ϸ����
var Ground = jsUtil.single(Square);

//��
var Snake = jsUtil.single();

var TOUCHENUM = {
    MOVE: 'MOVE',
    EAT: 'EAT',
    DIE: 'DIE'
}