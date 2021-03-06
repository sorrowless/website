$(document).ready(function () {
    $('.fancybox').fancybox({
        padding: 0
    });
    var point = 1503916273;
    var sec = 0;

    var startInterval = setInterval(function () {
        var left = point - Math.round(Date.now() / 1000);
        if (left > 0 && sec < 16) {
            left = seconds_to_data(left);
            $('.countdown .days span').text(left.days.pad());
            $('.countdown .hours span').text(left.hours.pad());
            $('.countdown .minutes span').text(left.minutes.pad());
            $('.countdown .seconds span').text(left.seconds.pad());
            sec = left.seconds;
        } else if (sec > 15) {
            sec--;
            $('.countdown .seconds span').text(sec);
        } else {
            $('.countdown h2').text($('.countdown h2').attr('data-onstart'));
            $('.countdown .row').remove();
            clearInterval(startInterval);
        }
    }, 1000);
});

function seconds_to_data(s) {
    var r = {};
    r.days = Math.floor(s / 86400);
    r.hours = Math.floor((s - r.days * 86400) / 3600);
    r.minutes = Math.floor((s - r.days * 86400 - r.hours * 3600) / 60);
    r.seconds = s - r.days * 86400 - r.hours * 3600 - r.minutes * 60;
    return r;
}

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}