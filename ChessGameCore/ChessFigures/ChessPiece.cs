using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChessGameCore
{
    public abstract class ChessPiece : ChessUnicalFigure
    {
        public ChessPiece(FigureColor color) : base(color) { }

        public ChessPiece(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY,  boardObject, boardMap) { }

        public ChessPiece(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap, FigureSwitch piece) : base(color, positionX, positionY, boardObject, boardMap, piece) { }


        protected bool GoUpMove(bool up, int index = 1)
        {
            if (up)
            {
                if (PositionY + index < 9)
                {
                    int xLine = PositionX;
                    int yLine = PositionY + index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoDownMove(bool down, int index = 1)
        {
            if (down)
            {
                if (PositionY - index > 0)
                {
                    int xLine = PositionX;
                    int yLine = PositionY - index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoRightMove(bool right, int index = 1)
        {
            if (right)
            {
                if (PositionX + index < 9)
                {
                    int xLine = PositionX + index;
                    int yLine = PositionY;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoLeftMove(bool left, int index = 1)
        {
            if (left)
            {
                if (PositionX - index > 0)
                {
                    int xLine = PositionX - index;
                    int yLine = PositionY;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoUpRightMove(bool upRight, int index = 1)
        {
            if (upRight)
            {
                if (PositionX + index < 9 && PositionY + index < 9)
                {
                    int xLine = PositionX + index;
                    int yLine = PositionY + index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoUpLeftMove(bool upLeft, int index = 1)
        {
            if (upLeft)
            {
                if (PositionX - index > 0 && PositionY + index < 9)
                {
                    int xLine = PositionX - index;
                    int yLine = PositionY + index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoDownRightMove(bool downRight, int index = 1)
        {
            if (downRight)
            {
                if (PositionX + index < 9 && PositionY - index > 0)
                {
                    int xLine = PositionX + index;
                    int yLine = PositionY - index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        protected bool GoDownLeftMove(bool downLeft, int index = 1)
        {
            if (downLeft)
            {
                if (PositionX - index > 0 && PositionY - index > 0)
                {
                    int xLine = PositionX - index;
                    int yLine = PositionY - index;
                    return CheckBoardAndSaveInfo(xLine, yLine);
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        private bool CheckBoardAndSaveInfo(int xLine, int yLine)
        {
            if (BoardMap[xLine - 1, yLine - 1] == null)
            {
                movesInfo.Add(new MovesInfoClass { PosX = xLine.ToString(), PosY = yLine.ToString(), InfoMove = FigureMoveRights.free.ToString() });
                return true;
            }
            else if (BoardMap[xLine - 1, yLine - 1].Color != Color)
            {
                movesInfo.Add(new MovesInfoClass { PosX = xLine.ToString(), PosY = yLine.ToString(), InfoMove = FigureMoveRights.other.ToString() });
                return false;
            }
            else
            {
                return false;
            }
        }

    }
}
