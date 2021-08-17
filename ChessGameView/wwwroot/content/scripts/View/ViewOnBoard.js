class ViewOnBoard {

    constructor(changeArray) {

        this._changeArray = changeArray;
        //this._piece = piece;
        //this._color = color;
        //this._boardMap = boardMap;
        //this._currentId = currentId;
    }

    static pieceSet(position, link = null, altName = null) {

        let idElement = document?.getElementById(position);
        let createElementt = document.createElement("img");
        if (idElement != null) {
            createElementt.src = link;
            createElementt.alt = altName;
            idElement.appendChild(createElementt);
        }
    }

    static reColoring() {

        var switchingElement = 0;

        for (var index = 1; index <= 8; index++) {

            if (index % 2 == 1) {
                this.setWhite(String(index) + "_" + String(8));
            } else {
                this.setBlue(String(index) + "_" + String(8));
            }
            for (var secindex = 1; secindex <= 8; secindex++) {

                let position = String(index) + "_" + String(secindex);

                if (index % 2 == 1 && secindex == 8) {
                    switchingElement = 1;
                } else if (index % 2 == 0 && secindex == 8) {
                    switchingElement = 0;
                } else if (switchingElement == 0) {
                    this.setBlue(position);
                    switchingElement = 1;

                } else if (switchingElement == 1) {
                    this.setWhite(position);
                    switchingElement = 0;
                }
            }
        }
    }

    static setWhite(idName) {
        document.getElementById(idName).setAttribute("class", "whitePosition");
    }

    static setBlue(idName) {
        document.getElementById(idName).setAttribute("class", "bluePosition");
    }

    static setRed(idName) {
        document.getElementById(idName).setAttribute("class", "redPosition");
    }

    static coloringYellow(position) {
        document.getElementById(position).setAttribute("class", "yellowPosition");
    }

    static rookColor(idName) {
        document.getElementById(idName).setAttribute("class", "rooukColor");
    }

    static checkPositionFree(idName) {
        return document?.getElementById(idName)?.childNodes?.length; //0-isFree, 1-notFree
    }

    static checkPlayerColor(idName) {
        return document?.getElementById(idName)?.childNodes[0]?.alt?.split(" ", 1);
    }

    static savePastPiceImg(idName) {
        return document.getElementById(idName).childNodes[0].src;
    }

    static savePastPiceAlt(idName) {
        return document.getElementById(idName).childNodes[0].alt;
    }

    static setWhiteQueueImg() {
        document.getElementById("walkqueue").src = "https://white.digital/wp-content/uploads/2020/03/WHITE.jpg";
    }

    static setBlackQueueImg() {
        document.getElementById("walkqueue").src = "https://static01.nyt.com/images/2020/07/05/pageoneplus/02insider-black/02insider-black-videoSixteenByNineJumbo1600.jpg";
    }

    static checkColorClass(idName) {
        return document.getElementById(idName).classList[0];
    }

    static piceMovingAnimation(firstPosition, secondPosition, GetElementById, pastMove, pastPiceLink,
        pastPiceAlt, idName = null, kill = false) {

        if (kill == false) {
            secondPosition.animate({ left: firstPosition.offset().left, top: firstPosition.offset().top + 48 }, 200, function () {
                ViewOnBoard.removePice(pastMove);
                ViewOnBoard.pieceSet(GetElementById, pastPiceLink, pastPiceAlt);
            });
        } else if (kill == true) {
            secondPosition.animate({ left: firstPosition.offset().left, top: firstPosition.offset().top + 48 }, 200, function () {
                ViewOnBoard.removePice(pastMove);
                ViewOnBoard.removePice(idName);
                ViewOnBoard.pieceSet(GetElementById, pastPiceLink, pastPiceAlt);
            });
        }
        
    }

    static removePice(idName) {
        const myNode = document.getElementById(idName);
        while (myNode?.lastElementChild) {
            myNode.removeChild(myNode.lastElementChild);
        }
    }

    static setQueueImg() {
        if (switcher % 2 == 0) {
            ViewOnBoard.setBlackQueueImg();
            switcher++;
        } else {
            ViewOnBoard.setWhiteQueueImg();
            switcher++;
        }
    }

    static rotateBoard() {

        var normalIndex = 1;
        for (var index = 8; index >= 1; index--) {
            var secondNormalIndex = 1;

            for (var secondIndex = 8; secondIndex >= 1; secondIndex--) {

                var oldBoardSquareId = secondNormalIndex + "_" + normalIndex;
                var newBoardSquareId = secondIndex + "_" + index;
                document.getElementById(oldBoardSquareId).setAttribute("id", newBoardSquareId);
                secondNormalIndex++;
            }
            $(".cordSt")[normalIndex - 1].innerHTML = normalIndex;
            $(".cordSt")[normalIndex - 1 + 8].innerHTML = String.fromCharCode(64 + 9 - normalIndex);
            normalIndex++;
        }
    }

    static setImgForPlayerOne(info) {
        document.getElementById("playerOne").src = info;
    }

    static setImgForPlayerTwo(info) {
        document.getElementById("playerTwo").src = info;
    }

    static startPositionsSet(whiteTeamStartPositions, blackTeamStartPositions) {
        //Set white pices positions from json file
        for (var index in whiteTeamStartPositions) {
            for (var secondIndex in whiteTeamStartPositions[index]) {

                let pos = whiteTeamStartPositions[index][secondIndex];
                resourSetJson(pos, index, WhiteKingResource, WhiteQueenResource,
                              WhiteBishopResource, WhiteKnightResource, WhiteRookResource, WhitePawnResource, White);
            }
        }
        //Set black pices positions from json file
        for (var index in blackTeamStartPositions) {
            for (var secondIndex in blackTeamStartPositions[index]) {

                let pos = blackTeamStartPositions[index][secondIndex];
                resourSetJson(pos, index, BlackKingResource, BlackQueenResource,
                              BlackBishopResource, BlackKnightResource, BlackRookResource, BlackPawnResource, Black);
            }
        }
    }

    //Game restart function
    static gameRestart(whiteTeamStartPositions, blackTeamStartPositions) {

        ViewOnBoard.reColoring();
        for (var index = 1; index <= 8; index++) {
            for (var secindex = 1; secindex <= 8; secindex++) {
                ViewOnBoard.removePice(String(index) + "_" + String(secindex));
            }
        }
    
        ViewOnBoard.startPositionsSet(whiteTeamStartPositions, blackTeamStartPositions);
      
    }

    static tableElementsStyleNull() {
        document.getElementsByTagName("td").style = "";
    }

    static timeFormaterPlayerOneView(timeValue) { //170
        var formatMinuteTime = Math.floor(timeValue / 60);
        var formatSecondsTime = timeValue % 60;
        document.getElementById("timer-first").innerHTML = formatMinuteTime + ":" + formatSecondsTime;
    }

    static timeFormaterPlayerTwoView(timeValue) {
        var formatMinuteTime = Math.floor(timeValue / 60);
        var formatSecondsTime = timeValue % 60;
        document.getElementById("timer-second").innerHTML = formatMinuteTime + ":" + formatSecondsTime;
    }

    onBoardChange() {
        var sizeMovesInfo = Object.size(this._changeArray);

        for (var index = 0; index < sizeMovesInfo; index++) {

            var positionX = this._changeArray[index].posX;
            var positionY = this._changeArray[index].posY;
            var killColorStatus = this._changeArray[index].infoMove;
            var chessId = positionX + "_" + positionY;

            if (killColorStatus == "free") {
                ViewOnBoard.coloringYellow(chessId);
            } else if (killColorStatus == "other") {
                ViewOnBoard.setRed(chessId);
            }
        }
    }
}