class ChessPiece {

    movesInfo = {};
    indexForMoveInfo = 0;

    constructor(color, positionX, positionY, boardMap, xMaxSize = 8, yMaxSize = 8, piece) {
        this._color = color;
        this._positionX = parseInt(positionX);
        this._positionY = parseInt(positionY);
        this._xMaxSize = xMaxSize;
        this._yMaxSize = yMaxSize;
        this._boardMap = boardMap;
        this._piece = piece;
    }
                
    goUpMove(up, index = 1) {
        if (up) {
            if (this._positionY + index < this._yMaxSize + 1) {
                let xLine = this._positionX;
                let yLine = this._positionY + index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goDownMove(down, index = 1) {
        if (down) {
            if (this._positionY - index > 0) {
                let xLine = this._positionX;
                let yLine = this._positionY - index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goRightMove(right, index = 1) {
        if (right) {
            if (this._positionX + index < this._yMaxSize + 1) {
                let xLine = this._positionX + index;
                let yLine = this._positionY;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goLeftMove(left, index = 1) {
        if (left) {
            if (this._positionX - index > 0) {
                let xLine = this._positionX - index;
                let yLine = this._positionY;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goUpRightMove(upRight, index = 1) {
        if (upRight) {
            if (this._positionX + index < this._xMaxSize + 1 && this._positionY + index < this._yMaxSize + 1) {
                let xLine = this._positionX + index;
                let yLine = this._positionY + index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goUpLeftMove(upLeft, index = 1) {
        if (upLeft) {
            if (this._positionX - index > 0 && this._positionY + index < this._yMaxSize + 1) {
                let xLine = this._positionX - index;
                let yLine = this._positionY + index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goDownRightMove(downRight, index = 1) {
        if (downRight) {
            if (this._positionX + index < this._xMaxSize + 1 && this._positionY - index > 0) {
                let xLine = this._positionX + index;
                let yLine = this._positionY - index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    goDownLeftMove(downLeft, index = 1) {
        if (downLeft) {
            if (this._positionX - index > 0 && this._positionY - index > 0) {
                let xLine = this._positionX - index;
                let yLine = this._positionY - index;
                let chessMapCurrentPosition = this._boardMap[xLine - 1][yLine - 1];
                if (chessMapCurrentPosition == 0) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine];
                    this.indexForMoveInfo++;
                    return true;
                } else if (chessMapCurrentPosition.color != this._color) {
                    this.movesInfo[this.indexForMoveInfo] = [xLine, yLine, "other"];
                    this.indexForMoveInfo++;
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    get сurrentPosition() {
        return this._positionX + ' ' + this._positionY;
    }

    position() {
        return String(this._positionX) + String(this._positionY);
    }
}
