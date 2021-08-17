using System;

namespace ChessGameCore
{
    public class ChessPawn : ChessUnicalFigure
    {

        public ChessPawn(FigureColor color) : base(color) { }

        public ChessPawn(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {

                if (Color == FigureColor.Black)
                {
                    if (PositionY == 7 && BoardMap[PositionX - 1, PositionY - 2] == null
                        && BoardMap[PositionX - 1, PositionY - 3] == null)
                    {
                        movesInfo.Add(new MovesInfoClass { PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY - 1), InfoMove = FigureMoveRights.free.ToString() });
                        movesInfo.Add(new MovesInfoClass { PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY - 2), InfoMove = FigureMoveRights.free.ToString() });
                    }

                    else if (PositionY > 1 && BoardMap[PositionX - 1, PositionY - 2] == null)
                    {
                        movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY - 1), InfoMove = FigureMoveRights.free.ToString() });
                    }

                    if (PositionX - 1 >= 1 && PositionY - 1 != 0)
                    {
                        if (BoardMap[PositionX - 2, PositionY - 2] != null
                            && BoardMap[PositionX - 2, PositionY - 2].Color != Color)
                        {
                            movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX - 1), PosY = Convert.ToString(PositionY - 1), InfoMove = FigureMoveRights.other.ToString() });
                        }
                    }

                    if (PositionX + 1 <= 8 && PositionY - 1 != 0)
                    {
                        if (BoardMap[PositionX, PositionY - 2] != null
                            && BoardMap[PositionX, PositionY - 2].Color != Color)
                        {
                            movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX + 1), PosY = Convert.ToString(PositionY - 1), InfoMove = FigureMoveRights.other.ToString() });
                        }
                    }

                }

                else if (Color == FigureColor.White)
                {
                    if (PositionY == 2 && BoardMap[PositionX - 1, PositionY] == null
                        && BoardMap[PositionX - 1, PositionY + 1] == null)
                    {
                        movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY + 1), InfoMove = FigureMoveRights.free.ToString() });
                        movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY + 2), InfoMove = FigureMoveRights.free.ToString() });
                    }

                    else if (PositionY < 8 && BoardMap[PositionX - 1, PositionY] == null)
                    {
                        movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX), PosY = Convert.ToString(PositionY + 1), InfoMove = FigureMoveRights.free.ToString() });
                    }


                    if (PositionX + 1 <= 8 && PositionY - 1 != 7)
                    {
                        if (BoardMap[PositionX, PositionY] != null
                            && BoardMap[PositionX, PositionY].Color != Color)
                        {
                            movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX + 1), PosY = Convert.ToString(PositionY + 1), InfoMove = FigureMoveRights.other.ToString() });
                        }
                    }

                    if (PositionX - 1 >= 1 && PositionY - 1 != 7)
                    {
                        if (BoardMap[PositionX - 2, PositionY] != null
                            && BoardMap[PositionX - 2, PositionY].Color != Color)
                        {
                            movesInfo.Add(new MovesInfoClass{ PosX = Convert.ToString(PositionX - 1), PosY = Convert.ToString(PositionY + 1), InfoMove = FigureMoveRights.other.ToString() });
                        }
                    }
                }
            }
        }
    }
}
