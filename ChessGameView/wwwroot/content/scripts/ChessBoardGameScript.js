//Take id from url GET
const SearchId = window.location.search;
const UrlParams = new URLSearchParams(SearchId);
const GameId = UrlParams.get("gameId");
const PlayerNumber = UrlParams.get("p");

//Creating board object and creating visual board!!!
var boardObject = new ChessBoard(8, 8);
var verticalSize = boardObject._xSize;
var horizontalSize = boardObject._ySize;

boardDraw(verticalSize, horizontalSize);

//Updating board from server!!!
ajaxBoardUpdate(true);

//Player information from server!!!
ajaxGetFirstPlayerInfo();
ajaxGetSecondPlayerInfo();

var playerColor, switcher = 0, animateCheck = false, versionControlMap = 0;
var firstPlayerImg, secondPlayerImg, intervalChecker = true;

//Checking second player!!!
var checkerPlayerJoin = ajaxCheckJoinedPlayer();

//Checking player color and rotate board!!!
if (PlayerNumber == "2") {

    ViewOnBoard.rotateBoard();
    ViewOnBoard.setImgForPlayerOne(secondPlayerImg);
    ViewOnBoard.setImgForPlayerTwo(firstPlayerImg);
    playerColor = Black;
}
else if (PlayerNumber == "1") {

    playerColor = White;
    if (checkerPlayerJoin == false) {
        alert("Please wait for second Player !!!");
    }
    ViewOnBoard.setImgForPlayerOne(firstPlayerImg);
    ViewOnBoard.setImgForPlayerTwo(secondPlayerImg);
}
else if (PlayerNumber == "spectator") {
    playerColor = "spectator";
    ViewOnBoard.setImgForPlayerOne(firstPlayerImg);
    ViewOnBoard.setImgForPlayerTwo(secondPlayerImg);
}


//setInterval(function () {
//    ajaxCheckGameIsActive();
//}, 1000);

//Information from server about board and updating interval 1.000 second!!!
setInterval(function () {

    ajaxCheckGameIsActive();

}, 1000);

//Using chess game controller and add event listenner with jquery click method!!!
$(document).ready(function () {

    $("td").click(function () {
        chessController(this.id)
    });

    $("#restart").click(function () {

        walkQueue = White;
        ViewOnBoard.gameRestart(WhiteTeamStartPositions, BlackTeamStartPositions);
        ViewOnBoard.setWhiteQueueImg();
        boardObject.restoureBoardMap();
    });
});


function ajaxCheckJoinedPlayer() {

    var informationFromServer;
    $.ajax({

        url: "https://localhost:44312/Game/CheckPlayerJoin?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            informationFromServer = info;
        },

        async: false
    });
    return informationFromServer;
}

//Methods for taking information from server !!!
function ajaxBoardUpdate(asyncStatus) {

    $.ajax({

        url: "https://localhost:44312/Game/GetBoardMap?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {
                SetStartPositionsFromServer(info);
            }
        },
        async: asyncStatus
    });
}


function ajaxGetFirstPlayerInfo() {

    $.ajax({

        url: "https://localhost:44312/Game/GetFirstPlayerInfo?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            document.getElementById("gameTitle").innerHTML += info?.firstName + " " + info?.lastName + " VS ";
            firstPlayerImg = PlayersResourceSwitcher[info.firstName + " " + info.lastName];
        },

        async: false
    });
}


function ajaxGetSecondPlayerInfo() {

    $.ajax({

        url: "https://localhost:44312/Game/GetSecondPlayerInfo?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            if (info != null) {
                document.getElementById("gameTitle").innerHTML += info.firstName + " " + info.lastName;
                secondPlayerImg = PlayersResourceSwitcher[info.firstName + " " + info.lastName];
            } 
        },

        async: false
    });
}


function ajaxPingPlayer() {
    $.get({
        url: "https://localhost:44312/Game/PingPlayer" + PlayerNumber + "?gameId=" + GameId,
    });
}


function ajaxVersionControllAndPlayerJoinChecker() {
    $.ajax({

        url: "https://localhost:44312/Game/VersionControlMapAndPlayerJoin?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {

                if (versionControlMap != info.versionBoardMap) {
                    ajaxBoardUpdate(false);
                    setQueueImg();
                    versionControlMap = info.versionBoardMap;
                }

                if (checkerPlayerJoin == false && info.joinedPlayer == true) {
                    alert(PlayerColorReflection[playerColor] + " team player just joined you can start PLAYING!!!");
                    checkerPlayerJoin = true;
                    ajaxGetSecondPlayerInfo();
                    ViewOnBoard.setImgForPlayerTwo(secondPlayerImg);
                }
            }
        },
        async: false
    });
}


function ajaxCheckGameIsActive() {
    $.get({

        url: "https://localhost:44312/Game/CheckIsGame?gameId=" + GameId,

        success: function (info, textStatus, xhr) {

            if (info == true) {

                ajaxPingPlayer();
                ajaxVersionControllAndPlayerJoinChecker();
                ajaxGetPlayersTimes();

            } else {

                alert("Your opponent is out of GAME//or his GAMETIME just gone. You won!!!");
                intervalChecker = false;
                document.location.href = "https://localhost:44312/Game";
            }

        },
    });
}


function ajaxGetPlayersTimes() {

    $.get({
        url: "https://localhost:44312/Game/GetPlayersPlayTime?gameId=" + GameId,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {
                if (PlayerNumber == 1 || PlayerNumber == Spectator) {
                    ViewOnBoard.timeFormaterPlayerOneView(info.firstPlayerTime);
                    ViewOnBoard.timeFormaterPlayerTwoView(info.secondPlayerTime);
                } else if (PlayerNumber == 2) {
                    ViewOnBoard.timeFormaterPlayerOneView(info.secondPlayerTime);
                    ViewOnBoard.timeFormaterPlayerTwoView(info.firstPlayerTime);
                }
            }
        }
    });
}


function setQueueImg() {
    if (switcher % 2 == 0) {
        ViewOnBoard.setBlackQueueImg();
        switcher++;
    } else {
        ViewOnBoard.setWhiteQueueImg();
        switcher++;
    }
}

