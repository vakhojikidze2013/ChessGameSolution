class PieceKing extends ChessPiece {

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

        up = this.goUpMove(up);
        down = this.goDownMove(down);
        right = this.goRightMove(right);
        left = this.goLeftMove(left);
        upRight = this.goUpRightMove(upRight);
        upLeft = this.goUpLeftMove(upLeft);
        downRight = this.goDownRightMove(downRight);
        downLeft = this.goDownLeftMove(downLeft);
    }
}