let subTimerId = 1
function incrementSubTimerId() {
  return subTimerId ++
}

export function createSubTimer(totalSeconds, isCurrent, title) {
  return {
    id: incrementSubTimerId(),
    totalSeconds,
    countDown: totalSeconds,
    title,
    isCurrent,
  }
}

export function convertSecToHMS(sec) {
  const hours = Math.floor((sec % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((sec % (60 * 60)) / (60))
  const seconds = Math.floor((sec % 60))

  return [hours, minutes, seconds]
}

function convertHrsToSec(hrs) {
  return hrs * 60 * 60
}

function convertMinToSec(min) {
  return min * 60
}

export function totalHMSToSec(h, m, s) {
  return convertHrsToSec(h) + convertMinToSec(m) + s
}

export function padTimeForDisplay(time) {
  return time.toString().length <= 1 ? '0' + time : time
}
