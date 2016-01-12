var init = function () {

    //check for browser support
    if (window.WebSocket) {
        alert("WebSocket Status: Supported");
    }
    else {
        alert("WebSocket Status: Not supported");
    }

    //create new WebSocket instance
    var webSoc = new WebSocket("wss://localhost:59551/"); //wss -> web socket secure

   
    //set status (method 1)
    webSoc.onopen = function () {
        alert("Connection Status: Open");
    }

    /*set status (method 2 / attach event listener)
        function doSomething(){
            //code to do something

        }
        webSoc.addEventListener("open", doSomething);

    */
    

    //open connection
    webSoc.onopen();

}



init();