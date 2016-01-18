var j = 0;

function timedCount2() {
    j = j + 1;
    postMessage(j);
    setTimeout("timedCount2()", 500);
}

timedCount2();