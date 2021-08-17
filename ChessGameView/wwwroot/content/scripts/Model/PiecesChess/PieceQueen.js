class PieceQueen extends ChessPiece {

    movesInfo = {};
    indexForMoveInfo = 0;

    constructor(color, positionX, positionY, boardMap, xMaxSize = 8, yMaxSize = 8) {
        super(color, positionX, positionY, boardMap, xMaxSize, yMaxSize);
    }

    allPossibleMoves() {

        var up = true;
        var down = true;
        var left = true;
        var right = true;
        var upRight = true;
        var upLeft = true;
        var downRight = true;
        var downLeft = true;
        var index = 1;
        while (up || down || right || left || upRight || upLeft || downRight || downLeft) {

            up = this.goUpMove(up, index);
            down = this.goDownMove(down, index);
            right = this.goRightMove(right, index);
            left = this.goLeftMove(left, index);
            upRight = this.goUpRightMove(upRight, index);
            upLeft = this.goUpLeftMove(upLeft, index);
            downRight = this.goDownRightMove(downRight, index);
            downLeft = this.goDownLeftMove(downLeft, index);
            index++;
        }
    }
}