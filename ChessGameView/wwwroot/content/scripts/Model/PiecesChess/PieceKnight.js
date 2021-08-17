class PieceKnight extends ChessPiece {

    movesInfo = {};

    constructor(color, positionX, positionY, boardMap, xMaxSize = 8, yMaxSize = 8) {
        super(color, positionX, positionY, boardMap, xMaxSize, yMaxSize);
    }
    
    allPossibleMoves(){
        var indexSec = 0;
        
        if (this._positionX + 1 < this._xMaxSize + 1 && this._positionY + 2 < this._yMaxSize + 1){
            let xLine = this._positionX + 1;
            let yLine = this._positionY + 2;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }
        
        if (this._positionX - 1 > 0 && this._positionY + 2 < this._yMaxSize + 1){
            let xLine = this._positionX - 1;
            let yLine = this._positionY + 2;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX + 2 < this._xMaxSize + 1 && this._positionY + 1 < this._yMaxSize + 1){
            let xLine = this._positionX + 2;
            let yLine = this._positionY + 1;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX + 2 < this._xMaxSize + 1 && this._positionY - 1 > 0){
            let xLine = this._positionX + 2;
            let yLine = this._positionY - 1;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX - 2 > 0 && this._positionY + 1 < this._yMaxSize + 1){
            let xLine = this._positionX - 2;
            let yLine = this._positionY + 1;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX - 2 > 0 && this._positionY - 1 > 0){
            let xLine = this._positionX - 2;
            let yLine = this._positionY - 1;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX + 1 < this._xMaxSize + 1 && this._positionY - 2 > 0){
            let xLine = this._positionX + 1;
            let yLine = this._positionY - 2;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }

        if (this._positionX - 1 > 0 && this._positionY - 2 > 0){
            let xLine = this._positionX - 1;
            let yLine = this._positionY - 2;
            let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
            if (chessMapCurrentPosition == 0) {
                this.movesInfo[indexSec] = [xLine, yLine];
                indexSec++;
            } else if (chessMapCurrentPosition.color != this._color) {
                this.movesInfo[indexSec] = [xLine, yLine, "other"];
                indexSec++;
            }
        }
    }
}
