namespace ChessGameCore
{
    public class ChessKing : ChessPiece
    {

        public ChessKing(FigureColor color) : base(color) { }

        public ChessKing(FigureColor color, int positionX, int positionY, ChessBoard boardObject, ChessUnicalFigure[,] boardMap) : base(color, positionX, positionY, boardObject, boardMap) { }

        public override void AllPossibleMoves()
        {
            if (Color == BoardMoveQueue)
            {
                bool permission = true;

                GoUpMove(permission);
                GoDownMove(permission);
                GoRightMove(permission);
                GoLeftMove(permission);
                GoUpRightMove(permission);
                GoUpLeftMove(permission);
                GoDownRightMove(permission);
                GoDownLeftMove(permission);

                // BoardObject.setWalkQueue(setEnemyColor());
            }
        }
    }
}
