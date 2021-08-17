var pastMove, pastPiceLink, pastPiceAlt, pastModelObjectMovesInfo, pastMoveImg, pastMoveAlt;
var walkQueue = White;

function chessController(idName) {

    const CurrentPositions = idName.split("_");
    if (pastMove == idName) {
        return;
    }

    if (pastMove !== undefined) {

        $.ajax({

            url: "https://localhost:44312/Game/CheckMove?gameId=" + GameId
                + "&pastPosX=" + pastMove[0] + "&pastPosY=" + pastMove[2] + "&posX=" + CurrentPositions[0]
                + "&posY=" + CurrentPositions[1],

            success: function (info, textStatus, xhr) {

                if (textStatus == "success") {

                    if (info == true) {

                        if (ViewOnBoard.checkColorClass(idName) == "yellowPosition") {
                            ViewOnBoard.piceMovingAnimation($('#' + idName), $('#' + pastMove + ' img'), idName, pastMove, pastPiceLink, pastPiceAlt);
                        } else if (ViewOnBoard.checkColorClass(idName) == "redPosition") {
                            ViewOnBoard.piceMovingAnimation($('#' + idName), $('#' + pastMove + ' img'), idName, pastMove, pastPiceLink, pastPiceAlt, idName, true);
                        }
                    }
                }
            },
            async: false
        });

        ViewOnBoard.reColoring();
        pastMove = undefined;
        return;
    }

    ViewOnBoard.reColoring();

    
    $.ajax({

        url: "https://localhost:44312/Game/MoveInfo?gameId=" + GameId + "&posX=" + CurrentPositions[0] + "&posY=" + CurrentPositions[1] + "&player=" + playerColor,

        success: function (info, textStatus, xhr) {

            if (textStatus == "success") {

                if (info != false) {

                    var viewObject = new ViewOnBoard(info);
                    viewObject.onBoardChange();
                    pastMove = idName;
                    pastPiceAlt = ViewOnBoard.savePastPiceAlt(idName);
                    pastPiceLink = ViewOnBoard.savePastPiceImg(idName);
                }
            }
        },
        async: false
    });
}