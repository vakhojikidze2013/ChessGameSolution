using System;
using System.Collections.Generic;

namespace ChessGameCore
{
    public class GameManager
    {

        public GameManager()
        {
            ChessGames = new Dictionary<string, GameClass>();
        }

        public Dictionary<string, GameClass> ChessGames { get; set; }

        public int VersionGamesListNow = 0;

        private void AddGames(string gameId, GameClass newGame)
        {
            ChessGames.Add(gameId, newGame);
        }

        private void PlayerOneTimeControl(string gameId)
        {
            ChessGames[gameId].Players[0].playTime--;
        }

        private void PlayerTwoTimeControl(string gameId)
        {
            ChessGames[gameId].Players[1].playTime--;
        }

        public string CreateGame(string gameId, Player firstPlayer)
        {
            var newGame = new GameClass(firstPlayer, null, gameId);
            AddGames(gameId, newGame);
            VersionGamesListNow++;
            return gameId;
        }

        public void JoinPlayer(string gameId, Player player)
        {
            ChessGames[gameId].Players[1] = player;
        }

        public bool CheckValidateMove(string gameId, string pastPosX, string pastPosY, string posX, string posY)
        {
            var refactoredPastPosX = Convert.ToInt32(pastPosX);
            var refactoredPastPosY = Convert.ToInt32(pastPosY);
            var refactoredPosX = Convert.ToInt32(posX);
            var refactoredPosY = Convert.ToInt32(posY);

            var boardMapPastPositionInfo = ChessGames[gameId].Board.BoardMap[refactoredPastPosX - 1, refactoredPastPosY - 1];

            if (boardMapPastPositionInfo == null)
            {
                return false;
            }

            var moveArray = boardMapPastPositionInfo.movesInfo;
            for (int check = 0; check < moveArray.Count; check++)
            {
                if (moveArray[check].PosX == posX && moveArray[check].PosY == posY)
                {
                    ChessGames[gameId].Board.ChangeBoardMap(refactoredPastPosX, refactoredPastPosY, refactoredPosX, refactoredPosY);
                    ChessGames[gameId].Board.ChangeBoardMoveQueue(ChessGames[gameId].Board.ChangeWalkQueue());
                    return true;
                }
            }

            return false;
        }

        public bool CheckIfPlayerJoined(string gameId)
        {
            if (ChessGames[gameId].Players[1] == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public dynamic GetMoveInfos(string gameId, string posX, string posY, string player)
        {

            var refactoredPosX = Convert.ToInt32(posX);
            var refactoredPosY = Convert.ToInt32(posY);
            var boardMapPositionInfo = ChessGames[gameId].Board.BoardMap[refactoredPosX - 1, refactoredPosY - 1];

            var convertedPlayerColor = (FigureColor)Enum.Parse(typeof(FigureColor), player);

            if (boardMapPositionInfo == null || boardMapPositionInfo.Color != convertedPlayerColor
                || convertedPlayerColor == FigureColor.spectator)
            {
                return false;
            }
            boardMapPositionInfo.movesInfo.Clear();
            boardMapPositionInfo.AllPossibleMoves();
            return boardMapPositionInfo.movesInfo;

        }

        public void DeleteGame(string gameId)
        {
            ChessGames.Remove(gameId);
        }

        public bool CheckIsGame(string gameId)
        {
            GameClass test;
            if (ChessGames.TryGetValue(gameId, out test))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void CheckPlayersPing()
        {
            foreach (var index in ChessGames)
            {
                string chessGameId = index.Key;
                if (CheckIsGame(chessGameId) == true)
                {
                    var firstPlayerPing = ChessGames[chessGameId].Players[0].lastPing;
                    var firstPlayerPastPing = ChessGames[chessGameId].Players[0].pastPing;

                    if (ChessGames[chessGameId].Players[1] != null)
                    {
                        var secondPlayerPing = ChessGames[chessGameId].Players[1].lastPing;
                        var secondPlayerPastPing = ChessGames[chessGameId].Players[1].pastPing;
                        if (firstPlayerPing == firstPlayerPastPing || secondPlayerPing == secondPlayerPastPing)
                        {
                            DeleteGame(chessGameId);
                        }
                        else
                        {
                            ChessGames[chessGameId].Players[0].pastPingActive();
                            ChessGames[chessGameId].Players[1].pastPingActive();
                        }
                    }
                    else
                    {
                        if (firstPlayerPing == firstPlayerPastPing)
                        {
                            DeleteGame(chessGameId);
                        }
                        else
                        {
                            ChessGames[chessGameId].Players[0].pastPingActive();
                        }
                    }
                }
            }
        }

        public void CheckerGameTime()
        {
            foreach (var index in ChessGames)
            {
                string chessGameId = index.Key;

                if (CheckIsGame(chessGameId))
                {
                    if (ChessGames[chessGameId].Players[0] != null && ChessGames[chessGameId].Players[1] != null)
                    {
                        if (ChessGames[chessGameId].Players[0].playTime == 0 || ChessGames[chessGameId].Players[1].playTime == 0)
                        {
                            DeleteGame(chessGameId);
                            continue;
                        }

                        if (ChessGames[chessGameId].Board.WalkQueue == FigureColor.White)
                        {
                            PlayerOneTimeControl(chessGameId);
                        }
                        else if (ChessGames[chessGameId].Board.WalkQueue == FigureColor.Black)
                        {
                            PlayerTwoTimeControl(chessGameId);
                        }
                    }
                }
            }
        }

        public int GetFirstPlayerGameTime(string gameId)
        {
            if (ChessGames[gameId].Players[0] != null)
            {
                return ChessGames[gameId].Players[0].playTime;
            }
            else
            {
                return 180;
            }
        }

        public int GetSecondPlayerGameTime(string gameId)
        {
            if (ChessGames[gameId].Players[1] != null)
            {
                return ChessGames[gameId].Players[1].playTime;
            }
            else
            {
                return 180;
            }
        }
    }
}
