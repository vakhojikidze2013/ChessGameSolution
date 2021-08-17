using ChessGameCore;
using ChessGameView.Models;
using Microsoft.AspNetCore.Mvc;

namespace ChessGameView.Controllers
{
    public class GameController : Controller
    {

        private readonly GameManager _core;

        public GameController(GameManager core)
        {
            _core = core;
        }


        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GameView()
        {
            return View();
        }

        public IActionResult ChessGamesInfo()
        {
            return View();
        }

        public IActionResult ChessGameProcess()
        {
            return View();
        }

        public IActionResult SetGame(string firstName, string lastName)
        {
            var gameId = "chessgame" + _core.VersionGamesListNow;
            if (_core.CheckIsGame(gameId) == false)
            {
                _core.CreateGame(gameId, new Player(firstName, lastName));
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        public IActionResult JoinPlayerGame(string gameId, string firstName, string lastName)
        {
            _core.JoinPlayer(gameId, new Player(firstName, lastName));
            return Json(true);
        }

        public IActionResult MoveInfo(string gameId, string posX, string posY, string player)
        {
            if (_core.CheckIfPlayerJoined(gameId) == true)
            {
                return Json(_core.GetMoveInfos(gameId, posX, posY, player));
            }
            else
            {
                return Json("");
            }
        }

        public IActionResult CheckMove(string gameId, string pastPosX, string pastPosY, string posX, string posY)
        {
            return Json(_core.CheckValidateMove(gameId, pastPosX, pastPosY, posX, posY));
        }

        public IActionResult CheckIsGame(string gameId)
        {
            return Json(_core.CheckIsGame(gameId));
        }

        public IActionResult GetBoardMap(string gameId)
        {
            return Json(_core.ChessGames[gameId].Board.VisualBoardMap);
        }

        public IActionResult VersionControlMapAndPlayerJoin(string gameId)
        {
            return Json(new MapVersionJoinedPlayer { VersionBoardMap = _core.ChessGames[gameId].Board.VersionBoardMap, JoinedPlayer = _core.CheckIfPlayerJoined(gameId) });
        }

        public IActionResult CheckPlayerJoin(string gameId)
        {
            return Json(_core.CheckIfPlayerJoined(gameId));
        }

        public IActionResult GetFirstPlayerInfo(string gameId)
        {
            return Json(_core.ChessGames[gameId].Players[0]);
        }

        public IActionResult GetSecondPlayerInfo(string gameId)
        {
            return Json(_core.ChessGames[gameId].Players[1]);
        }

        public IActionResult VersionGamesList()
        {
            return Json(new MapVersionJoinedPlayer { VersionGameList = _core.VersionGamesListNow });
        }

        public IActionResult PingPlayer1(string gameId)
        {
            _core.ChessGames[gameId].Players[0].lastPingActive();
            return Json("");

        }

        public IActionResult PingPlayer2(string gameId)
        {
            _core.ChessGames[gameId].Players[1].lastPingActive();
            return Json("");
        }

        public IActionResult GetPlayersPlayTime(string gameId)
        {
            PlayersPlayTimeModel timerValues = new();
            timerValues.FirstPlayerTime = _core.ChessGames[gameId].Players[0].playTime;

            if (_core.ChessGames[gameId].Players[1] != null)
            {
                timerValues.SecondPlayerTime = _core.ChessGames[gameId].Players[1].playTime;
            }
            else
            {
                timerValues.SecondPlayerTime = 180;
            }

            return Json(timerValues);
        }

        public void DeleteGame(string gameId)
        {
            _core.DeleteGame(gameId);
        }

    }
}