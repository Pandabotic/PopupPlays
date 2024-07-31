const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = function() {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');
};

var countDownDate = new Date("Oct 1, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElemenetById("days").innerHTML = "00";
        document.getElemenetById("hours").innerHTML = "00";
        document.getElemenetById("minutes").innerHTML = "00";
        document.getElemenetById("seconds").innerHTML = "00";
    }

},1000);