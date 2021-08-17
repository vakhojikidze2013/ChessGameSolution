namespace ChessGameCore
{
    public class ChessBoard
    {
        public ChessBoard(int xSize, int ySize)
        {
            XSize = xSize;
            YSize = ySize;
        }

        public int XSize { get; set; }

        public int YSize { get; set; }

        public ChessUnicalFigure[,] BoardMap { get; set; }

        public ChessUnicalFigure[,] MiniBoardMap { get; set; }

        public string[][] VisualBoardMap { get; set; }

        public int VersionBoardMap { get; set; } = 0;

        public FigureColor WalkQueue { get; set; }

        public FigureColor ChangeWalkQueue()
        {
            if (WalkQueue == FigureColor.White)
            {
                WalkQueue = FigureColor.Black;
                return FigureColor.Black;
            } else 
            {
                WalkQueue = FigureColor.White;
                return FigureColor.White;
            }
        }

        public void ChangeBoardMap(int pastPositionX, int pastPositionY, int positionX, int positionY)
        {

            ChessUnicalFigure FigureCopy = BoardMap[pastPositionX - 1, pastPositionY - 1];
      
            FigureCopy.PositionX = positionX;
            FigureCopy.PositionY = positionY;
            BoardMap[positionX - 1, positionY - 1] = FigureCopy;
            BoardMap[pastPositionX - 1, pastPositionY - 1] = null;

            ChessUnicalFigure MiniFigureCopy = MiniBoardMap[pastPositionX - 1, pastPositionY - 1];
            MiniBoardMap[positionX - 1, positionY - 1] = MiniFigureCopy;
            MiniBoardMap[pastPositionX - 1, pastPositionY - 1] = null;

            string VisualBoardMapCopy = VisualBoardMap[pastPositionX - 1][pastPositionY - 1];
            VisualBoardMap[positionX - 1][positionY - 1] = VisualBoardMapCopy;
            VisualBoardMap[pastPositionX - 1][pastPositionY - 1] = "0";
            VersionBoardMap++;
        }

        public void ChangeBoardMoveQueue(FigureColor test)
        {
            for (int index = 0; index < 8; index++)
            {
                for (int secondIndex = 0; secondIndex < 8; secondIndex++)
                {
                    if (BoardMap[index, secondIndex] == null)
                    {
                        continue;
                    } else
                    {
                        BoardMap[index, secondIndex].BoardMoveQueue = test;
                    }
                }
            }
        }

        public void CreateBoardMap(ChessBoard testObj)
        {
            WalkQueue = FigureColor.White;

            ChessUnicalFigure[,] miniBoardMap =
            {
                {new ChessRook(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessRook(FigureColor.Black)},    
                {new ChessKnight(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessKnight(FigureColor.Black)},
                {new ChessBishop(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessBishop(FigureColor.Black)},
                {new ChessQueen(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessQueen(FigureColor.Black)},  
                {new ChessKing(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessKing(FigureColor.Black)},    
                {new ChessBishop(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessBishop(FigureColor.Black)},
                {new ChessKnight(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessKnight(FigureColor.Black)},
                {new ChessRook(FigureColor.White), new ChessPawn(FigureColor.White), null, null, null, null, new ChessPawn(FigureColor.Black), new ChessRook(FigureColor.Black)}     

            };

            ChessUnicalFigure[,] boardMap = {
                {new ChessRook(FigureColor.White, 1, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 1, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 1, 7, testObj, miniBoardMap), new ChessRook(FigureColor.Black, 1, 8, testObj, miniBoardMap)}, //0
                {new ChessKnight(FigureColor.White, 2, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 2, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 2, 7, testObj, miniBoardMap), new ChessKnight(FigureColor.Black, 2, 8, testObj, miniBoardMap)}, //1
                {new ChessBishop(FigureColor.White, 3, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 3, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 3, 7, testObj, miniBoardMap), new ChessBishop(FigureColor.Black, 3, 8, testObj, miniBoardMap)}, //2
                {new ChessQueen(FigureColor.White, 4, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 4, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 4, 7, testObj, miniBoardMap), new ChessQueen(FigureColor.Black, 4, 8, testObj, miniBoardMap)}, //3
                {new ChessKing(FigureColor.White, 5, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 5, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 5, 7, testObj, miniBoardMap), new ChessKing(FigureColor.Black, 5, 8, testObj, miniBoardMap)}, //4
                {new ChessBishop(FigureColor.White, 6, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 6, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 6, 7, testObj, miniBoardMap), new ChessBishop(FigureColor.Black, 6, 8, testObj, miniBoardMap)}, //5
                {new ChessKnight(FigureColor.White, 7, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 7, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 7, 7, testObj, miniBoardMap), new ChessKnight(FigureColor.Black, 7, 8, testObj, miniBoardMap)}, //6
                {new ChessRook(FigureColor.White, 8, 1, testObj, miniBoardMap), new ChessPawn(FigureColor.White, 8, 2, testObj, miniBoardMap), null, null, null, null, new ChessPawn(FigureColor.Black, 8, 7, testObj, miniBoardMap), new ChessRook(FigureColor.Black, 8, 8, testObj, miniBoardMap)} //7
//                                              0                                                               1                                2     3     4     5                                      6                                                              7
            };

            string[][] visualBoardMap =
            {
                new string[] {"White Rook", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Rook"},
                new string[] {"White Knight", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Knight"},
                new string[] {"White Bishop", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Bishop"},
                new string[] {"White Queen", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Queen"},
                new string[] {"White King", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black King"},
                new string[] {"White Bishop", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Bishop"},
                new string[] {"White Knight", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Knight"},
                new string[] {"White Rook", "White Pawn", "0", "0", "0", "0", "Black Pawn", "Black Rook"},
            };
            BoardMap = boardMap;
            MiniBoardMap = miniBoardMap;
            VisualBoardMap = visualBoardMap;

        }

    }
}
