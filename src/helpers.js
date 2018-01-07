let subTimerId = 1
function incrementSubTimerId() {
  return subTimerId ++
}

export function createSubTimer(hours, minutes, seconds, isCurrent, title) {
  return {
    id: incrementSubTimerId(),
    hours,
    minutes,
    seconds,
    title,
    isCurrent,
  }
}

function convertHrsToSec(hrs) {
  return hrs * 60 * 60
}

function convertMinToSec(min) {
  return min * 60
}

export function totalTime(h, m, s) {
  return convertHrsToSec(h) + convertMinToSec(m) + s
}

export function padTimeForDisplay(time) {
  return time.toString().length <= 1 ? '0' + time : time
}
