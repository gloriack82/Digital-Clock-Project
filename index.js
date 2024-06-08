const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const citySelect = document.getElementById("city-selection");
const localTimezoneOffset = -new Date().getTimezoneOffset() / 60;

citySelect.addEventListener('mousedown', function (event){
    event.preventDefault;
    citySelect.size = 8;
});

citySelect.addEventListener('change', function (){
    updateClock();
    citySelect.size = 1;
})

updateClock()

function updateClock() {
    let timezoneOffset;
    if (citySelect.value == "local"){
        timezoneOffset = localTimezoneOffset;
    } else {
        timezoneOffset = parseFloat(citySelect.value);
        // parseFloat converts a string to a floating point number
    }

    let currenttime = new Date();
    let utcTime = currenttime.getTime() + (currenttime.getTimezoneOffset() * 60000);
    let localTime = new Date(utcTime + (timezoneOffset * 3600000));


    let h = localTime.getHours();
    let m = localTime.getMinutes();
    let s = localTime.getSeconds();
    let ampm = "AM"

    if (h >= 12) {

        if (h > 12) h = h - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    if (h < 10) {
        h = '0' + h;
    }

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000)
}

