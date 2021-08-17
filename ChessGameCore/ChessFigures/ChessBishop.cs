using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChessGameCore
{
    public class ChessBishop : ChessPiece
    {

        public ChessBishop(FigureColor color) : base(color) { }

        public ChessBishop(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {
                bool upRight = true;
                bool upLeft = true;
                bool downRight = true;
                bool downLeft = true;
                int index = 1;

                while (upRight || upLeft || downLeft || downRight)
                {
                    upRight = GoUpRightMove(upRight, index);
                    upLeft = GoUpLeftMove(upLeft, index);
                    downRight = GoDownRightMove(downRight, index);
                    downLeft = GoDownLeftMove(downLeft, index);
                    index++;
                }
                //BoardObject.setWalkQueue(setEnemyColor());
            }
        }
    }
}
