//Object size finder
Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//Board draw function
function boardDraw(_xSize, _ySize) {
    var switcher = 1;
    var table = document.getElementById("board");

    for (var index = 1; index <= _ySize; index++) {

        table.appendChild(document.createElement("tr"));
        let td = table.childNodes[index];
        td.appendChild(document.createElement("td"));
        td.lastChild.setAttribute("class", "cordSt");
        td.lastChild.innerHTML = (_ySize + 1) - index;

        for (var rawindex = 1; rawindex <= _xSize; rawindex++) {

            var indet = String(rawindex) + "_" + String(parseInt((_ySize + 1) - index));
            var yCord = indet[0];
            if (_xSize >= 10) {
                yCord = indet[0] + indet[1];
            }

            td.appendChild(document.createElement("td"));
            td.lastChild.setAttribute("id", indet);

            if (switcher % 2 == 1) {
                if (parseInt(yCord) % 2 == 1) {
                    td.lastChild.setAttribute("class", "whitePosition");
                } else {
                    td.lastChild.setAttribute("class", "bluePosition");
                }
            } else {
                if (parseInt(yCord) % 2 == 1) {
                    td.lastChild.setAttribute("class", "bluePosition");
                } else {
                    td.lastChild.setAttribute("class", "whitePosition");
                }
            }

        }
        switcher++;
    }

    table.appendChild(document.createElement("tr"));
    var xCords = table.childNodes[_ySize + 1];

    for (var rawindex = 1; rawindex <= _xSize + 1; rawindex++) {

        table.lastChild.appendChild(document.createElement("td"));
        if (rawindex > 1) {
            xCords.lastChild.setAttribute("class", "cordSt");
            xCords.lastChild.innerHTML = String.fromCharCode(64 + rawindex - 1)
        }

    }
    $(".cordSt").css({ "pointer-events": "none" });
}

//Function for json 
function resourSetJson(position, index,
    kingResource, queenResource, bishopResource,
    knightResource, rookResource, pawnResource, color) {
    switch (index) {
        case "King":
            ViewOnBoard.pieceSet(position, kingResource, color + " King");
            break;

        case "Queen":
            ViewOnBoard.pieceSet(position, queenResource, color + " Queen");
            break;

        case "Bishop":
            ViewOnBoard.pieceSet(position, bishopResource, color + " Bishop");
            break;

        case "Knight":
            ViewOnBoard.pieceSet(position, knightResource, color + " Knight");
            break;

        case "Rook":
            ViewOnBoard.pieceSet(position, rookResource, color + " Rook");
            break;

        case "Pawn":
            ViewOnBoard.pieceSet(position, pawnResource, color + " Pawn");
            break;
    }
}

function boardFiguresDrawFromJson(boardObject) {
    boardDraw(boardObject._xSize, boardObject._ySize);

}

//Decide who makes a move!
function queueController(walkQueue) {

    if (walkQueue == White) {
        ViewOnBoard.setBlackQueueImg();
        return Black;
    } else {
        ViewOnBoard.setWhiteQueueImg();
        return White;
    }
}

function SetStartPositionsFromServer(info) {

    for (var index = 0; index < 8; index++) {
        for (var secondIndex = 0; secondIndex < 8; secondIndex++) {

            var upIndex = index + 1;
            var upSecondIndex = secondIndex + 1;
            var position = upIndex + "_" + upSecondIndex;

            if (info[index][secondIndex] != "0") {
                ViewOnBoard.removePice(position);
                ViewOnBoard.pieceSet(position, ResourceSwitcher[info[index][secondIndex]], info[index][secondIndex]);
            } else if (info[index][secondIndex] == "0") {
                ViewOnBoard.removePice(position);
            }
            
        }
    }
}
