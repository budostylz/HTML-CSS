var create_socket = function (host) {

   
   var send_button = $("#send").click(function () {
       var message = $("#message").val();
       webSoc.send(message);
       message = "";
       
   });

   var close = $("#close").click(function () {
       webSoc.close();
   });
    
    //create new WebSocket instance
    var webSoc = new WebSocket(host); //wss -> web socket secure

    //get error
    webSoc.onerror = function (evt) {
        //Examine error data property to determine error type
        alert("Error: " + evt.data);
    }


    //open connection and send message
    webSoc.onopen = function () {
        //alert("Connection Status: Open");
        
    }

    //server response
    webSoc.onmessage = function (e) {
        $("#response").append(e.data.toString() + "<br/>");
    }

    
    webSoc.onclose = function () {
        alert("Connection Closed");
    }


    
   

   

    /*if (webSoc.bufferedAmount != 0 && webSoc.bufferedAmount < someThreshold) {
        webSoc.send(msg);
    }*/
    //webSoc.close();
    //webSoc.close(1000, "Connection closed: No errors");
    
    
}//end create_socket



var init = function () {
        var host = "ws://localhost:52263/WebSocketsServer2.ashx?chatName=Shaun";
        try {
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





$(document).ready(function () {
    //var a = browser_support();
    var b = init();
});
