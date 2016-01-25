
    var allowDropping = function (e) {
        e.preventDefault();
        
    }

    var dragging = function (e) {
        e.dataTransfer.setData("Text", event.target.id);
    }

    var dropping = function (e) {
        e.preventDefault();
        var info = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(info));
    }