
$(document).ready(function () {
    var w1;
    var w2;
    
    var start_worker1 = $("#start_worker1").click(function () {

        if (typeof (Worker) !== "undefined") {//check browser support 
            if (typeof (w1) == "undefined") {
                w1 = new Worker("/js/worker1.js");//create worker1

            }
            w1.onmessage = function (event) {
                $("#result1").text( event.data );//get response from worker1
            };
        } else {
            $("#result").text("Sorry! No Web Worker support.");
        }

    });

    var stop_worker1 = $("#stop_worker1").click(function () {
        w1.terminate();
        w1 = undefined;

    });

    var start_worker2 = $("#start_worker2").click(function () {

       
        if (typeof (Worker) !== "undefined") {//check browser support 
            if (typeof (w2) == "undefined") {
                w2 = new Worker("/js/worker2.js");//create worker2

            }
            w2.onmessage = function (event) {
                $("#result2").text(event.data);//get response from worker2
            };
        } else {
            $("#result2").text("Sorry! No Web Worker support.");
        }
        
    });

    var stop_worker2 = $("#stop_worker2").click(function () {
      
        w2.terminate();
        w2 = undefined;

    });

});






    
