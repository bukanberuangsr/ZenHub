function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;

    let time = hour + ":" + min;
    document.getElementById("clock").innerHTML = time;
    var interval = setTimeout(function() {currentTime()}, 1000);
}

currentTime();