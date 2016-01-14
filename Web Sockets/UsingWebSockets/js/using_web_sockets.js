var create_socket = function (host) {
  
   

    //create new WebSocket instance
    var webSoc = new WebSocket(host); //wss -> web socket secure

    //get error
    webSoc.onerror = function (evt) {
        //Examine error data property to determine error type
        alert("Error: " + evt.data);
    }


    //open connection and send message
    webSoc.onopen = function () {
        alert("Connection Status: Open");
        webSoc.send("This is a message from the client");
        alert("Buffered Amount: " + webSoc.bufferedAmount);
        
    }

    //server response
    webSoc.onmessage = function (e) {
        alert(e.data.toString());
    }

    
    webSoc.onclose = function () {
        alert("Close Connection");
    }



   

   

    /*if (webSoc.bufferedAmount != 0 && webSoc.bufferedAmount < someThreshold) {
        webSoc.send(msg);
    }*/
    //webSoc.close();
    //webSoc.close(1000, "Connection closed: No errors");
    
    
}



var init = function () {
    var host = "ws://localhost:52263/WebSocketsServer.ashx";

    try{
        socket = create_socket(host);
       
    }
    catch (e) {
        console.log(e.name + " : " + e.message);
    }



}//end init 


var browser_support = function () {
    //check for browser support
    if (window.WebSocket) {
        alert("WebSocket Status: Supported");
    }
    else {
        alert("WebSocket Status: Not supported");
    }

}//end browser_report


var a = browser_support();
var b = init();



/*
Check if broswer support web socket


if (window.WebSocket)
    alert("WebSocket Status: Supported");
else
    alert("WebSocket Status: Not Supported");
*/