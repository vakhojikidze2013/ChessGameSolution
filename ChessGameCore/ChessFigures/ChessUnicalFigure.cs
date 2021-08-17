using System;
using System.Collections.Generic;

namespace ChessGameCore
{
    public abstract class ChessUnicalFigure
    {

        public ChessUnicalFigure(FigureColor color)
        {
            Color = color;
        }

        public ChessUnicalFigure(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap)
        {
            Color = color;
            PositionX = positionX;
            PositionY = positionY;
            BoardObject = boardObject;
            BoardMap = boardMap;
            BoardMoveQueue = boardObject.WalkQueue;
        }

        public ChessUnicalFigure(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap, FigureSwitch piece)
        {
            Color = color;
            PositionX = positionX;
            PositionY = positionY;
            BoardObject = boardObject;
            BoardMap = boardMap;
            BoardMoveQueue = boardObject.WalkQueue;
            Piece = piece;
        }


        public FigureColor Color { get; set; }

        public int PositionX { get; set; }

        public int PositionY { get; set; }

        public ChessBoard BoardObject { get; set; }

        public ChessUnicalFigure[,] BoardMap { get; set; }

        public FigureColor BoardMoveQueue { get; set; }

        public FigureSwitch Piece { get; set; }


        public List<MovesInfoClass> movesInfo = new();

        public abstract void AllPossibleMoves();

    }
}
