const ampmE1 = document.getElementById("ampm");
const citySelect = document.getElementById("city-selection");
const localTimezoneOffset = -new Date().getTimezoneOffset() / 60;


citySelect.addEventListener('mousedown', function (event) {
    if (event.target.tagName == 'SELECT') {
        event.preventDefault;
        citySelect.size = 8;
    }
});

citySelect.addEventListener('click', function (event) {
    if (event.target.tagName == 'OPTION') {
        updateClock();
        citySelect.size = 1;
    }

})


updateClock()

function updateClock() {
    let timezoneOffset;
    if (citySelect.value == "local") {
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
    ampmE1.innerText = ampm;

    const secondh = document.getElementById("sechand0");
    const minh = document.getElementById("minhand0");
    const hourh = document.getElementById("hourhand0");

    const seconddeg = (s / 60) * 360;
    const mindeg = (m / 60) * 360 + (s / 60) * 6;
    const hourdeg = (h / 12) * 360 + (m / 60) * 30;

    secondh.style.transform=`rotate(${seconddeg}deg)`;
    minh.style.transform=`rotate(${mindeg}deg)`;
    hourh.style.transform=`rotate(${hourdeg}deg)`;


    setTimeout(updateClock, 1000);
}

