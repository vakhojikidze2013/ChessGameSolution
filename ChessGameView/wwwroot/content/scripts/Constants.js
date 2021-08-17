const ConnectLinkPlayerList = "https://localhost:44312/jsons/player-list.json";
const ConnectLingMatches = "https://localhost:44312/jsons/matches.json";
const ConnectLinkChessGamesInfo = "https://localhost:44312/jsons/chess-games-info.json";
const Json = "json";

const Black = "Black";
const White = "White";

const King = "King";
const Rook = "Rook";
const Bishop = "Bishop";
const Queen = "Queen";
const Knight = "Knight";
const Pawn = "Pawn";

const GameIndentificator = "chessgame";
const Spectator = "spectator";

const ChessGameDefaultLogo = "../content/images/ChessLogos/ChessGameLogo.png";

const BlackKingResource = "../content/images/PicesResource/BlackKing.png";
const BlackQueenResource = "../content/images/PicesResource/BlackQueen.png";
const BlackBishopResource = "../content/images/PicesResource/BlackBishop.png";
const BlackKnightResource = "../content/images/PicesResource/BlackKnight.png";
const BlackRookResource = "../content/images/PicesResource/BlackRook.png";
const BlackPawnResource = "../content/images/PicesResource/BlackPawn.png";

const WhiteKingResource = "../content/images/PicesResource/WhiteKing.png";
const WhiteQueenResource = "../content/images/PicesResource/WhiteQueen.png";
const WhiteBishopResource = "../content/images/PicesResource/WhiteBishop.png";
const WhiteKnightResource = "../content/images/PicesResource/WhiteKnight.png";
const WhiteRookResource = "../content/images/PicesResource/WhiteRook.png";
const WhitePawnResource = "../content/images/PicesResource/WhitePawn.png";

const ResourceSwitcher = {
    "Black King": BlackKingResource,
    "White King": WhiteKingResource,
    "Black Queen": BlackQueenResource,
    "White Queen": WhiteQueenResource,
    "Black Bishop": BlackBishopResource,
    "White Bishop": WhiteBishopResource,
    "Black Knight": BlackKnightResource,
    "White Knight": WhiteKnightResource,
    "Black Pawn": BlackPawnResource,
    "White Pawn": WhitePawnResource,
    "Black Rook": BlackRookResource,
    "White Rook": WhiteRookResource
}

const PlayersResourceSwitcher = {
    "Magnus Carlsen": "../content/images/PlayersPhoto/MagnusCarlsenPhoto.jpg",
    "Hikaru Nakamura": "../content/images/PlayersPhoto/HikaruNakamuraPhoto.jpg",
    "Viswanathan Anand": "../content/images/PlayersPhoto/ViswanathanAnand.jpg",
    "Eric Hansen": "../content/images/PlayersPhoto/EricHansen.jpg",
    "Nino Batsiashvili": "../content/images/PlayersPhoto/NinoBatsiashvili.jpg",
    "Lara Schulze": "../content/images/PlayersPhoto/LaraSchulze.jpg",
    "Alexader Shabalov": "../content/images/PlayersPhoto/AlexanderShabalov.jpg",
}

const PlayerColorReflection = {
    "Black": White,
    "White": Black
}

const ChessMatchesInfo = `{
    "ChessMatches": {
        "MagnusCarlsen": {

            "FirstGame": [
                "Magnus Carlsen VS Hikaru Nakamura",
                "../content/images/PlayersPhoto/MagnusCarlsenPhoto.jpg",
                "../content/images/PlayersPhoto/HikaruNakamuraPhoto.jpg",
              {
                "FirstPlayerName": "Magnus",
                "FirstPlayerLastName": "Carlsen",
                "SecondPlayerName": "Hikaru",
                "SecondPlayerLastName": "Nakamura"
              }
            ],

            "SecondGame": [
                "Magnus Carlsen vs Viswanathan Anand",
                "../content/images/PlayersPhoto/MagnusCarlsenPhoto.jpg",
                "../content/images/PlayersPhoto/ViswanathanAnand.jpg",
                {
                  "FirstPlayerName": "Magnus",
                  "FirstPlayerLastName": "Carlsen",
                  "SecondPlayerName": "Viswanathan",
                  "SecondPlayerLastName": "Anand"
                }
            ]
        },

        "HikaruNakamura": {

            "FirstGame": [
                "Hikaru Nakamura VS Magnus Carlsen",
                "../content/images/PlayersPhoto/HikaruNakamuraPhoto.jpg",
              "../content/images/PlayersPhoto/MagnusCarlsenPhoto.jpg",
              {
                "FirstPlayerName": "Hikaru",
                "FirstPlayerLastName": "Nakamura",
                "SecondPlayerName": "Magnus",
                "SecondPlayerLastName": "Carlsen"
              }

            ],

            "SecondGame": [
                "Hikaru Nakamura VS Eric Hansen",
                "../content/images/PlayersPhoto/HikaruNakamuraPhoto.jpg",
              "../content/images/PlayersPhoto/EricHansen.jpg",
              {
                "FirstPlayerName": "Hikaru",
                "FirstPlayerLastName": "Nakamura",
                "SecondPlayerName": "Eric",
                "SecondPlayerLastName": "Hansen"
              }
            ]
        },

        "NinoBatsiashvili": {

            "FirstGame": [
                "Nino Batsiashvili VS Magnus Carlsen",
                "../content/images/PlayersPhoto/NinoBatsiashvili.jpg",
              "../content/images/PlayersPhoto/MagnusCarlsenPhoto.jpg",
              {
                "FirstPlayerName": "Nino",
                "FirstPlayerLastName": "Batsiashvili",
                "SecondPlayerName": "Magnus",
                "SecondPlayerLastName": "Carlsen"
              }
            ],

            "SecondGame": [
                "Nino Batsiashvili VS Lara Schulze",
                "../content/images/PlayersPhoto/NinoBatsiashvili.jpg",
                "../content/images/PlayersPhoto/LaraSchulze.jpg",
              {
                "FirstPlayerName": "Nino",
                "FirstPlayerLastName": "Batsiashvili",
                "SecondPlayerName": "Lara",
                "SecondPlayerLastName": "Schulze"
              }
            ]
        },

        "EricHansen": {

            "FirstGame": [
                "Eric Hansen VS Hikaru Nakamura",
                "../content/images/PlayersPhoto/EricHansen.jpg",
              "../content/images/PlayersPhoto/HikaruNakamuraPhoto.jpg",
              {
                "FirstPlayerName": "Eric",
                "FirstPlayerLastName": "Hansan",
                "SecondPlayerName": "Hikaru",
                "SecondPlayerLastName": "Nakamura"
              }
            ],

            "SecondGame": [
                "Eric Hansen VS Alexader Shabalov",
                "../content/images/PlayersPhoto/EricHansen.jpg",
               "../content/images/PlayersPhoto/AlexanderShabalov.jpg",
              {
                "FirstPlayerName": "Eric",
                "FirstPlayerLastName": "Hansen",
                "SecondPlayerName": "Alexader",
                "SecondPlayerLastName": "Shabalov"
              }

            ]
        }
    }
}`;

const ChessMatchesInfoo = JSON.parse(ChessMatchesInfo);