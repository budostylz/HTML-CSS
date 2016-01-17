
$(document).ready(function () {
    var w;
    
    var start_worker = $("#start_worker").click(function () {

        if (typeof (Worker) !== "undefined") {//check browser support 
            if (typeof (w) == "undefined") {
                w = new Worker("/js/workerCode.js");//create worker
            }
            w.onmessage = function (event) {
                $("#result").text( event.data );//get response from worker
            };
        } else {
            $("#result").text("Sorry! No Web Worker support.");
        }

    });

    var stop_worker = $("#stop_worker").click(function () {
        alert("false");

    });
});






    
    
    


function stopWorker() {
    w.terminate();
    w = undefined;
}