export function convertSecToHMS(sec) {
  const hours = Math.floor((sec % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((sec % (60 * 60)) / (60))
  const seconds = Math.floor((sec % 60))

  return [hours, minutes, seconds]
}

const convertHrsToSec = (hrs) => hrs * 60 * 60
const convertMinToSec = (min) => min * 60

export function totalHMSToSec(h, m, s) {
  return convertHrsToSec(h) + convertMinToSec(m) + s
}

export function padTimeForDisplay(time) {
  return time.toString().length <= 1 ? '0' + time : time
}
