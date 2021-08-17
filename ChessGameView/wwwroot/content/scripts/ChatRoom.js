const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/ChessGameProcess?gameid=" + GameId)
    .configureLogging(signalR.LogLevel.Information)
    .build();


hubConnection.on("Send", function (data) {
    let element = document.createElement("p");
    element.appendChild(document.createTextNode(data));
    let firstElement = document.getElementById("chatroom").firstChild;
    document.getElementById("chatroom").insertBefore(element, firstElement);
})


$("#sendBtn").click(function () {
    let message = document.getElementById("message").value;
    hubConnection.invoke("Send", message);

});

hubConnection.start();
