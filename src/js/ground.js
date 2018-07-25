var oGround = new Ground(BASE_POSITION_X, BASE_POSITION_Y, XLEN * SQUARE_WITH, YLEN * SQUARE_WITH, document.createElement('div'));
console.log(oGround)
oGround.init = function() {
    this.viewContent.style.position = 'absolute';
    this.viewContent.style.left = this.x + 'px';
    this.viewContent.style.top = this.y + 'px';
    this.viewContent.style.width = this.width + 'px';
    this.viewContent.style.height = this.height + 'px';
    this.viewContent.style.backgroundColor = 'lime';

    document.body.appendChild(this.viewContent);

    this.SquareTable = [];
    this.FloorTable = [];

    for(var i = 0; i < YLEN; i ++) {
        this.SquareTable[i] = new Array(XLEN);
        for(var j = 0; j < XLEN; j ++) {
            var newSquare = null;
            if(i == 0 || j == 0 || i == YLEN - 1 || j == XLEN - 1) {
                //Ç½
                newSquare = SquareFactory.create('Stone', j, i, 'black');
            }else {
                //µØ°å
                newSquare = SquareFactory.create('Floor', j, i, 'orange');
            }
            this.SquareTable[i][j] = newSquare;
            this.FloorTable.push(j + ':' + i);
            this.viewContent.appendChild(newSquare.viewContent);
        }
    }
}

oGround.remove = function (x, y) {
    this.viewContent.removeChild(this.SquareTable[y][x].viewContent)
}

oGround.append = function (square) {
    this.SquareTable[square.y][square.x] = square;
    this.viewContent.appendChild(square.viewContent);
}

oGround.randomFood = function () {
    var len = this.FloorTable.length;
    var randomIndex;
    var indexArr;
    while(1) {
        randomIndex = parseInt(Math.random() * len);
        indexArr = this.FloorTable[randomIndex].split(':').map(function(ele) {
            return Number(ele);
        });
        if(indexArr[0] > 0 && indexArr[0] < XLEN - 1 && indexArr[1] > 0 && indexArr[1] < YLEN - 1) {
            break;
        }
    }
    this.FloorTable.remove(indexArr[0], indexArr[1]);
    var food = SquareFactory.create('Food', indexArr[0], indexArr[1], 'green');
    this.remove(indexArr[0], indexArr[1]);
    this.append(food);
}