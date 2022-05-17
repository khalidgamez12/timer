function DigitalClock() {
    var Clock = new Date();
    var hour = Clock.getHours();
    var minute = Clock.getMinutes();
    var seconds = Clock.getSeconds();
    var dayornight = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? hour - 12 : hour;
    seconds = ("0" + seconds).slice(-2)
    minute = ("0" + minute).slice(-2);
    document.getElementById('time').innerHTML =
        hour + ":" + minute + ":" + seconds + dayornight;


    var t = setTimeout(DigitalClock, 500);
}