const SearchId = window.location.search;
const UrlParams = new URLSearchParams(SearchId);
const JsonIndent = UrlParams.get("game");
const ChessMatchInfos = ChessMatchesInfoo.ChessMatches[JsonIndent];

var playerFirstName, playerLastName;
var VersionGameList = 0;

playerSwitcher(JsonIndent);

setInterval(function () {
    $.ajax({

        url: "https://localhost:44312/Game/VersionGamesList",

        success: function (info, textStatus, xhr) {

            if (textStatus == "success") {
                if (VersionGameList != info.versionGameList) {
                    //Unda gaanaxlos tamashebis sia vizualurad da tavidan unda gadaawyos!!!
                    VersionGameList = info.versionGameList;
                    removeOldGameList();

                    for (var index = 0; index < info.versionGameList; index++) {
                        updateGameList(index, "Chess Game " + index);
                    }
                }
            }
        },
    });
}, 1000);

//Setting information from json server with Url and view methods!
infoFromServerJsonPageTwo(ConnectLinkChessGamesInfo, Json, JsonIndent);

$(document).ready(function () {
    $("#button1").click(function () {
        ajaxSetNewGame();
    });
});


function removeOldGameList() {
    var gameNode = document.getElementById("games-list");
    gameNode.querySelectorAll('*').forEach(n => n.remove());
}

function updateGameList(versionGameList, gameText) {
    var gameListIndent = document.getElementById("games-list");
    var divDocumentCreate = document.createElement("div");
    var imgDocumentCreate = document.createElement("img");
    var paragraphDocumentCreate = document.createElement("p");
    
    gameListIndent.appendChild(divDocumentCreate);
    gameListIndent.lastChild.appendChild(imgDocumentCreate);
    gameListIndent.lastChild.appendChild(paragraphDocumentCreate);

    document.querySelectorAll("#games-list div img")[versionGameList].setAttribute("class", "play-list");
    document.querySelectorAll("#games-list div img")[versionGameList].setAttribute("id", GameIndentificator + versionGameList);
    document.querySelectorAll("#games-list div img")[versionGameList].setAttribute("onclick", "ajaxGoToGamePage(this.id)");
    document.querySelectorAll("#games-list div img")[versionGameList].setAttribute("src", ChessGameDefaultLogo);
    document.querySelectorAll("#games-list div p")[versionGameList].innerHTML = gameText;
}

function playerSwitcher(urlId) {
    if (urlId == "MagnusCarlsen") {
        playerFirstName = "Magnus";
        playerLastName = "Carlsen";

    } else if (urlId == "HikaruNakamura") {
        playerFirstName = "Hikaru";
        playerLastName = "Nakamura";

    } else if (urlId == "NinoBatsiashvili") {
        playerFirstName = "Nino";
        playerLastName = "Batsiashvili";

    } else if (urlId == "EricHansen") {
        playerFirstName = "Eric";
        playerLastName = "Hansen";
    }
}

function ajaxGoToGamePage(pageGameId) {
    $.get({

        url: "https://localhost:44312/Game/CheckPlayerJoin?gameId=" + pageGameId,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {
                if (info == false) {
                    $.get({

                        url: "https://localhost:44312/Game/JoinPlayerGame?gameId=" + pageGameId +
                            "&firstName=" + playerFirstName + "&lastName=" + playerLastName,

                        success: function (info, textStatus, xhr) {
                            if (textStatus == "success") {
                                document.location.href = "https://localhost:44312/Game/ChessGameProcess?gameId=" + pageGameId + "&p=2";
                            }
                        },

                    });
                } else {
                    document.location.href = "https://localhost:44312/Game/ChessGameProcess?gameId=" + pageGameId + "&p=spectator";
                }
            }
        },

    });
}

function ajaxSetNewGame() {
    $.ajax({

        url: "https://localhost:44312/Game/SetGame?firstName="
            + playerFirstName + "&lastName=" + playerLastName,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {
                if (info == true) {
                    document.location.href = "https://localhost:44312/Game/ChessGameProcess?gameId=" + GameIndentificator + VersionGameList + "&p=1";
                }
            }
        }

    });
}


