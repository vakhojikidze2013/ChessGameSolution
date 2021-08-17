using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChessGameCore
{
    public class ChessRook : ChessPiece
    {

        public ChessRook(FigureColor color) : base(color) { }

        public ChessRook(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {
                bool up = true;
                bool down = true;
                bool left = true;
                bool right = true;
                int index = 1;

                while (up || down || left || right)
                {
                    up = GoUpMove(up, index);
                    down = GoDownMove(down, index);
                    right = GoRightMove(right, index);
                    left = GoLeftMove(left, index);
                    index++;
                }
            }
        }
    }
}
