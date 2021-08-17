class PiecePawn extends ChessPiece {

    movesInfo = {};

    constructor(color, positionX, positionY, boardMap, xMaxSize = 8, yMaxSize = 8) {
        super(color, positionX, positionY, boardMap, xMaxSize, yMaxSize);
    }

    allPossibleMoves() {
        var indexSec = 0;

        if (this._color == "Black") {

            if (this._positionY == this._yMaxSize - 1 && this._boardMap[this._positionX - 1][this._positionY - 1 - 1] == 0
                && this._boardMap[this._positionX - 1][this._positionY - 2 - 1] == 0) {

                this.movesInfo[indexSec] = [this._positionX, this._positionY - 1];
                indexSec++;
                this.movesInfo[indexSec] = [this._positionX, this._positionY - 2];
                indexSec++;

            } else if (this._positionY > 1 && this._boardMap[this._positionX - 1][this._positionY - 1 - 1] == 0) {
                this.movesInfo[indexSec] = [this._positionX, this._positionY - 1];
                indexSec++;
            }
            if (this._positionX - 1 >= 1) {
                if (this._boardMap[this._positionX - 1 - 1][this._positionY - 1 - 1].color != undefined
                    && this._boardMap[this._positionX - 1 - 1][this._positionY - 1 - 1].color != this._color) {
                    this.movesInfo[indexSec] = [this._positionX - 1, this._positionY - 1, "other"];
                    indexSec++;
                }
            }
            if (this._positionX + 1 <= 8) {
                if (this._boardMap[this._positionX + 1 - 1][this._positionY - 1 - 1].color != undefined
                    && this._boardMap[this._positionX + 1 - 1][this._positionY - 1 - 1].color != this._color) {
                    this.movesInfo[indexSec] = [this._positionX + 1, this._positionY - 1, "other"];
                    indexSec++;
                }
            }

        } else if (this._color == "White") {

            if (this._positionY == 2 && this._boardMap[this._positionX - 1][this._positionY + 1 - 1] == 0
                && this._boardMap[this._positionX - 1][this._positionY + 2 - 1] == 0) {
                this.movesInfo[indexSec] = [this._positionX, this._positionY + 1];
                indexSec++;
                this.movesInfo[indexSec] = [this._positionX, this._positionY + 2];
                indexSec++;

            } else if (this._positionY < 8 && this._boardMap[this._positionX - 1][this._positionY + 1 - 1] == 0) {
                this.movesInfo[indexSec] = [this._positionX, this._positionY + 1];
                indexSec++;
            }
            if (this._positionX + 1 <= 8) {
                if (this._boardMap[this._positionX + 1 - 1][this._positionY + 1 - 1].color != undefined
                    && this._boardMap[this._positionX + 1 - 1][this._positionY + 1 - 1].color != this._color) {
                    this.movesInfo[indexSec] = [this._positionX + 1, this._positionY + 1, "other"];
                    indexSec++;
                }
            }
            if (this._positionX - 1 >= 1) {
                if (this._boardMap[this._positionX - 1 - 1][this._positionY + 1 - 1].color != undefined
                    && this._boardMap[this._positionX - 1 - 1][this._positionY + 1 - 1].color != this._color) {
                    this.movesInfo[indexSec] = [this._positionX - 1, this._positionY + 1, "other"];
                    indexSec++;
                }
            }
        }
    }
}