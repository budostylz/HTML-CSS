﻿
$(document).ready(function () {
    try{
        var w1;
        var w2;

        var start_worker1 = $("#start_worker1").click(function () {

            if (typeof (Worker) !== "undefined") {//check browser support 
                if (typeof (w1) == "undefined") {
                    w1 = new Worker("/js/worker1.js");//create worker1

                }
                w1.onmessage = function (event) {//get response from worker1
                    $("#result1").text(event.data);
                };

                w1.onerror = function (event) {//get error info
                    console.warn(event.message);
                }

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

                w2.onmessage = function (event) {//get response from worker2
                    $("#result2").text(event.data);
                };

                w2.onerror = function (event) {//get error info
                    console.warn(event.message);
                }


            } else {
                $("#result2").text("Sorry! No Web Worker support.");
            }

        });

        var stop_worker2 = $("#stop_worker2").click(function () {

            w2.terminate();
            w2 = undefined;

        });
    }
    catch (e) {
        Console.log(e.name + " : " + e.message);
    }
   

});






    
