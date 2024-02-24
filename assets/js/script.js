
function updateClock(){
    let now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    var secondDegree = (seconds / 60) * 360;
    var minuteDegree = (55 / 60) * 360 + (seconds / 60) * 6;
    var hourDegree = (hours / 12) *360 + (minutes / 60) * 30
    // var second = seconds * 6;

    document.getElementById("second").style.transform = `rotate(${secondDegree}deg)`
    document.getElementById("minute").style.transform = `rotate(${minuteDegree}deg)`
    document.getElementById("hour").style.transform = `rotate(${hourDegree}deg)`
}

updateClock();

setInterval(updateClock, 1000);