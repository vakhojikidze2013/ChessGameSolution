namespace ChessGameCore
{
    public class ChessKnight : ChessUnicalFigure
    {

        public ChessKnight(FigureColor color) : base(color) { }

        public ChessKnight(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {
                if (PositionX + 1 < 9 && PositionY + 2 < 9)
                {
                    int xLine = PositionX + 1;
                    int yLine = PositionY + 2;

                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX - 1 > 0 && PositionY + 2 < 9)
                {
                    int xLine = PositionX - 1;
                    int yLine = PositionY + 2;

                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX + 2 < 9 && PositionY + 1 < 9)
                {
                    int xLine = PositionX + 2;
                    int yLine = PositionY + 1;
                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX + 2 < 9 && PositionY - 1 > 0)
                {
                    int xLine = PositionX + 2;
                    int yLine = PositionY - 1;
                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX - 2 > 0 && PositionY + 1 < 9)
                {
                    int xLine = PositionX - 2;
                    int yLine = PositionY + 1;
                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX - 2 > 0 && PositionY - 1 > 0)
                {
                    int xLine = PositionX - 2;
                    int yLine = PositionY - 1;
                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX + 1 < 9 && PositionY - 2 > 0)
                {
                    int xLine = PositionX + 1;
                    int yLine = PositionY - 2;
                    СheckBoardMap(xLine, yLine);
                }

                if (PositionX - 1 > 0 && PositionY - 2 > 0)
                {
                    int xLine = PositionX - 1;
                    int yLine = PositionY - 2;
                    СheckBoardMap(xLine, yLine);
                }
                //BoardObject.setWalkQueue(setEnemyColor());
            }
        }

        private void СheckBoardMap(int xLine, int yLine)
        {

            if (BoardMap[xLine - 1, yLine - 1] == null)
                movesInfo.Add(new MovesInfoClass { PosX = xLine.ToString(), PosY = yLine.ToString(), InfoMove = FigureMoveRights.free.ToString() });
            else if (BoardMap[xLine - 1, yLine - 1].Color != Color)
                movesInfo.Add(new MovesInfoClass { PosX = xLine.ToString(), PosY = yLine.ToString(), InfoMove = FigureMoveRights.other.ToString() });
        }
    }
}
