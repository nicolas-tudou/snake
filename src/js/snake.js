var snake = new Snake();
snake.score = 0;
snake.head = null;
snake.tail = null;
var DIRECTIONENUM = {
    UP: {
        x: 0, y: -1
    },
    DOWN: {
        x: 0, y: 1
    },
    LEFT: {
        x: -1, y: 0
    },
    RIGHT: {
        x: 1, y: 0
    }
}
snake.init = function (ground) {
    this.direction = DIRECTIONENUM.RIGHT;
    var head = SquareFactory.create('SnakeHead', 3, 1, 'red');
    ground.FloorTable.remove(3 + ':' + 1)
    this.body1 = SquareFactory.create('SnakeBody', 2, 1, 'blue');
    ground.FloorTable.remove(2 + ':' + 1)
    this.body2 = SquareFactory.create('SnakeBody', 1, 1, 'blue');
    ground.FloorTable.remove(1 + ':' + 1)

    this.head = head;
    this.head.next = this.body1;
    this.head.last = null;

    this.body1.next = this.body2;
    this.body1.last = this.head;

    this.body2.next = null;
    this.body2.last = this.body1;

    this.tail = this.body2;

    ground.remove(this.head.x, this.head.y);
    ground.append(this.head)

    ground.remove(this.body1.x, this.body1.y);
    ground.append(this.body1)

    ground.remove(this.body2.x, this.body2.y);
    ground.append(this.body2)

    // this.snakeAction[ground.SquareTable[this.head.y + this.direction.y][this.head.x + this.direction.x].touch()](ground);
}

snake.snakeAction = {
    MOVE: function (ground) {
        this.moveHead(ground);
        ground.remove(snake.tail.x, snake.tail.y);
        var newFloor = SquareFactory.create('Floor', snake.tail.x, snake.tail.y, 'orange');
        ground.append(newFloor);
        ground.FloorTable.push(snake.tail.x + ':' + snake.tail.y);
        snake.tail = snake.tail.last;
        snake.tail.last.next = null;
    
    },
    EAT: function (ground) {
        this.moveHead(ground);
        snake.score ++;
        ground.randomFood();
    },
    DIE: function (ground) {
        alert('你才这么点长：' + snake.score);
        clearInterval(timer)
    },
    moveHead: function (ground) {
        var nextHead = ground.SquareTable[snake.head.y + snake.direction.y][snake.head.x + snake.direction.x];
        var newBody = SquareFactory.create('SnakeBody', snake.head.x, snake.head.y, 'blue');
        var newHead = SquareFactory.create('SnakeHead', nextHead.x, nextHead.y, 'red');

        console.log(newHead)
        ground.FloorTable.remove(nextHead.x + ':' + nextHead.y);

        newBody.next = snake.head.next;
        snake.head.next.last = newBody;
        newBody.last = newHead;

        newHead.next = newBody;
        newHead.last = null;
        snake.head = newHead;
        ground.remove(nextHead.x, nextHead.y);
        ground.append(newHead);

        ground.remove(newBody.x, newBody.y);
        ground.append(newBody);
    }
}