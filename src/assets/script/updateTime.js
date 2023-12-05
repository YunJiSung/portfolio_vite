export function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    var year = now.getFullYear();
    var month = now.getMonth() + 1; // JavaScript months are 0-based.
    var day = now.getDate();
    var strDate = month + '/' + day + '/' + year;

    document.querySelector('.time').textContent = strTime;
    document.querySelector('.date').textContent = strDate;
}

// Update the time every minute
updateTime();
setInterval(updateTime, 60000);
