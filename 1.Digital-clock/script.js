const container = document.getElementById("container")
const hourEl = document.getElementById("hour")
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')
const AmPmEl = document.getElementById('ampm')



function updateTime(){

  let hours = new Date().getHours();
let mins = new Date().getMinutes();
let secs = new Date().getSeconds();
let AmPm = "AM"

    if(hours > 12){
      hours = hours - 12;
      AmPm = "PM"
    }

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

    hourEl.innerText = hours;
    minsEl.innerText = mins;
    secsEl.innerText = secs;
    AmPmEl.innerText = AmPm;


}

setInterval(updateTime, 1000)