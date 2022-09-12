const days = document.getElementById('day')
const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')




const newDate = '1 jan 2023';


function countDown(){
    const newYearDate = new Date(newDate);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate) / 1000

    const day = Math.floor(totalSecond / 3600 / 24);
    const hour = Math.floor(totalSecond / 3600) % 24;
    const minute = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;


    days.innerHTML = day
    hours.innerHTML = formation(hour)
    minutes.innerHTML = formation(minute)
    seconds.innerHTML = formation(second)
}
countDown()

function formation(time){
    return time <10 ? (`0${time}`) :time
}


setInterval(countDown, 1000)