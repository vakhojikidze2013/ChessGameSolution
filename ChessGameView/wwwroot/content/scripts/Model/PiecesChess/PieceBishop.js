class PieceBishop extends ChessPiece {

    movesInfo = {};
    indexForMoveInfo = 0;

    constructor(color, positionX, positionY, boardMap, xMaxSize = 8, yMaxSize = 8) {
        super(color, positionX, positionY, boardMap, xMaxSize, yMaxSize);
    }

    allPossibleMoves() {

        var upRight = true;
        var upLeft = true;
        var downRight = true;
        var downLeft = true;
        var index = 1;
        while (upRight || upLeft || downLeft || downRight) {

            upRight = this.goUpRightMove(upRight, index);
            upLeft = this.goUpLeftMove(upLeft, index);
            downRight = this.goDownRightMove(downRight, index);
            downLeft = this.goDownLeftMove(downLeft, index);
            index++;
        }
    }
}