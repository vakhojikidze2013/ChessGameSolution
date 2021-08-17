using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChessGameCore
{
    public class GameClass
    {

        public GameClass(Player playerOne, Player playerTwo, string gameId)
        {
            Players[0] = playerOne;
            Players[1] = playerTwo;
            GameId = gameId;
            BoardSet();
        }

        public string GameId { get; }

        public ChessBoard Board { get; set; } = new ChessBoard(8, 8);


        public Player[] Players = new Player[2];

        private void BoardSet()
        {
            Board.CreateBoardMap(Board);
        }
    }
}
