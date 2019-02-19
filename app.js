function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d = date.getDay()
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s;

    if (d === 0) {
        d = "Sun"
    }
    if (d === 1) {
        d = "Mon"
    }
    if (d === 2) {
        d = "Tue"
    }
    if (d === 3) {
        d = "Wed"
    }
    if (d === 4) {
        d = "Thu"
    }
    if (d === 5) {
        d = "Fri"
    }
    if (d === 6) {
        d = "Sat"
    }










    var time = h + ":" + m + ":" + s + " " + session + " " + d;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();