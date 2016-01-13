var create_socket = function () {
  
    //check for browser support
    if (window.WebSocket) {
        alert("WebSocket Status: Supported");
    }
    else {
        alert("WebSocket Status: Not supported");
    }

    //create new WebSocket instance
    var webSoc = new WebSocket("ws://localhost:52263/WebSocketsServer.ashx"); //wss -> web socket secure


    //set status (method 1)
    webSoc.onopen = function () {
        alert("Connection Status: Open");
    }
    
    
}

create_socket();


/*
Check if broswer support web socket


if (window.WebSocket)
    alert("WebSocket Status: Supported");
else
    alert("WebSocket Status: Not Supported");
*/