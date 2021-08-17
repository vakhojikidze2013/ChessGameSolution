function infoFromServerJsonPageOne(connection, data, indent, indentificator) {

    $.get({

        url: connection,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {

                var jsonFileFromServer = info;
                jsonFileFromServer = jsonFileFromServer.Chess.PlayerInfo;
                viewInformationSetFromJsonOnePage(indent, jsonFileFromServer[indentificator].PhotoLink,
                                                  jsonFileFromServer[indentificator].Name,
                                                  jsonFileFromServer[indentificator].Country,
                                                  jsonFileFromServer[indentificator].Born,
                                                  jsonFileFromServer[indentificator].Age);

            }
            if (textStatus == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        },
        dataType: data
    });
}

var jsonFileFromServer;
function infoFromServerJsonPageTwo(connection, data, indent) {

    $.get({

        url: connection,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {

                jsonFileFromServer = info;
                jsonFileFromServer = jsonFileFromServer.ChessGames;
                viewInformationFromJsonSecondPage(jsonFileFromServer[indent].FirstGame.Photos[0],
                                                  jsonFileFromServer[indent].FirstGame.Players)
            }
            if (textStatus == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        },
        dataType: data
    });
}

var playerInfo;
function infoFromServerJsonPageThird(connection, data, indent, indentificator) {

    $.get({

        url: connection,

        success: function (info, textStatus, xhr) {
            if (textStatus == "success") {
                playerInfo = info.ChessMatches[indent][indentificator];
                viewInformationFromJsonThirdPage(info.ChessMatches[indent][indentificator]);

            }
            if (textStatus == "error") {
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
            }
        },
        async: false,

        dataType: data
    });
}

