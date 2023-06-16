const newYears = '12 December 2023'

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

function countDown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

const substract = newYearsDate - currentDate


  const TotalSeconds = Math.floor(substract / 1000)

  const days = Math.floor(TotalSeconds / 3600 / 24)
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const mins = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds % 60);
  

  daysEl.textContent = days
  hoursEl.textContent = formatTime(hours)
  minsEl.textContent = formatTime(mins)
  secondsEl.textContent = formatTime(seconds)

}

function formatTime(time){
  return time < 10 ? `0${time}` : time
}

countDown()
setInterval(countDown)
