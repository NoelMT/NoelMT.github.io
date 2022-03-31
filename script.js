

function loop() {
    setTimeout(function() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        document.getElementById("time").innerHTML = time
        loop();
    }, 150)
}

loop();