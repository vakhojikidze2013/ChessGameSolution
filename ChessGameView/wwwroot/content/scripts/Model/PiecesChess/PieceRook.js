class PieceRook extends ChessPiece {

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
        var index = 1;

        while (up || down || left || right) {
            up = this.goUpMove(up, index);
            down = this.goDownMove(down, index);
            right = this.goRightMove(right, index);
            left = this.goLeftMove(left, index);
            index++;
        }
    }
}