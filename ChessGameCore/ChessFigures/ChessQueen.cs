using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChessGameCore
{
    public class ChessQueen : ChessPiece
    {

        public ChessQueen(FigureColor color) : base(color) { }

        public ChessQueen(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {
                bool up = true;
                bool down = true;
                bool left = true;
                bool right = true;
                bool upRight = true;
                bool upLeft = true;
                bool downRight = true;
                bool downLeft = true;
                int index = 1;

                while (up || down || right || left || upRight || upLeft || downRight || downLeft)
                {
                    up = GoUpMove(up, index);
                    down = GoDownMove(down, index);
                    right = GoRightMove(right, index);
                    left = GoLeftMove(left, index);
                    upRight = GoUpRightMove(upRight, index);
                    upLeft = GoUpLeftMove(upLeft, index);
                    downRight = GoDownRightMove(downRight, index);
                    downLeft = GoDownLeftMove(downLeft, index);
                    index++;
                }
            }
        }
    }
}
