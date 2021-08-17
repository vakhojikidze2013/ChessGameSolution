function informationFromJson(indentificator) {
    return document.querySelector(indentificator);
}

//View for first page!
function viewInformationSetFromJsonOnePage(indent, photoLink, name, country, born, age) {
    informationFromJson(indent + " a img").src = photoLink;
    informationFromJson(indent + " .name").innerHTML += name;
    informationFromJson(indent + " .country").innerHTML += country;
    informationFromJson(indent + " .born").innerHTML += born;
    informationFromJson(indent + " .age").innerHTML += age;
}

//View function for second page!
function viewInformationFromJsonSecondPage(firstGameOnePhoto, firstGamePlayers) {
    informationFromJson("#first .twoImages .firstImage").src = firstGameOnePhoto;

    //Setting players name, info, date from json
    document.querySelectorAll("#first .vs")[0].innerHTML += firstGamePlayers;

}

//View for third page!
function viewInformationFromJsonThirdPage(infoJson) {
    
    document.getElementById("playerOne").src = infoJson[1];
    document.getElementById("playerTwo").src = infoJson[2];
    document.getElementById("gameTitle").innerHTML += infoJson[0];
}