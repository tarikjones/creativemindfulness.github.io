// Background
var colors = ['#5fcea5', '#d8a35d', '#5e95ed'];
var active = 0;
setInterval(function () {
    document.querySelector('#body-one').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 20000);



// Timer
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#time');
    startTimer(tenMinutes, display);
};




// Messages
(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(3000)
            .delay(5000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();



// audio toggle
$('#sound').click(function () {
    document.getElementById('peaks-audio').pause();
    $('#sound').addClass('hide');
    $('#mute').removeClass('hide');
});

$('#mute').click(function () {
    document.getElementById('peaks-audio').play();
    $('#mute').addClass('hide');
    $('#sound').removeClass('hide');

});


$('#peaks-audio').on('ended', function () {
    $('#sound').addClass('hide');
    $('#mute').removeClass('hide');
    $('#peaks-audio').load();
});

// skip
$(function () {
    $("#skip").delay(15000).fadeIn();
});

// back
$(function () {
    $("#back").delay(5000).fadeIn();
});


// index text toggle
function hideInner() {
    var x = document.getElementById('inner-toggle');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

$('#inner-toggle-btn').click(function () {
    var $this = $(this);
    $this.toggleClass('#inner-toggle-btn');
    if ($this.hasClass('#inner-toggle-btn')) {
        $this.text('Text: Off');
    } else {
        $this.text('Text: On');
    }
});

