class ChessBoard {

    constructor(xSize, ySize) {
        this._xSize = xSize;
        this._ySize = ySize;
    }

    boardMap = [
        [{color: "White", piece: "Rook"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Rook"}],     //0
        [{color: "White", piece: "Knight"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Knight"}], //1
        [{color: "White", piece: "Bishop"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Bishop"}], //2
        [{color: "White", piece: "Queen"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Queen"}],   //3
        [{color: "White", piece: "King"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "King"}],     //4
        [{color: "White", piece: "Bishop"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Bishop"}], //5
        [{color: "White", piece: "Knight"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Knight"}], //6
        [{color: "White", piece: "Rook"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Rook"}]      //7
    //               |0|                                |1|                |2||3||4||5|               |6|                              |7|   
    ]

    changeBoardMap(positionX, positionY,  pastPositionX, pastPositionY, boardMap) {
        var FigureColor, FigurePiece;
        FigureColor = boardMap[pastPositionX - 1][pastPositionY - 1].color;
        FigurePiece = boardMap[pastPositionX - 1][pastPositionY - 1].piece;
        var FigureInfo = {color: FigureColor, piece: FigurePiece};
        boardMap[positionX - 1][positionY - 1] = FigureInfo;
        boardMap[pastPositionX - 1][pastPositionY - 1] = 0;
    }

    restoureBoardMap() {
        this.boardMap = [
            [{color: "White", piece: "Rook"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Rook"}],     //0
            [{color: "White", piece: "Knight"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Knight"}], //1
            [{color: "White", piece: "Bishop"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Bishop"}], //2
            [{color: "White", piece: "Queen"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Queen"}],   //3
            [{color: "White", piece: "King"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "King"}],     //4
            [{color: "White", piece: "Bishop"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Bishop"}], //5
            [{color: "White", piece: "Knight"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Knight"}], //6
            [{color: "White", piece: "Rook"}, {color: "White", piece: "Pawn"}, 0, 0, 0, 0, {color: "Black", piece: "Pawn"}, {color: "Black", piece: "Rook"}]      //7
        //               |0|                                |1|                |2||3||4||5|               |6|                              |7|   
        ]
    }

}