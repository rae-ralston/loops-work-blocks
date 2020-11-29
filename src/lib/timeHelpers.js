export function convertSecToHMS(sec) {
  const hours = Math.floor((sec % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((sec % (60 * 60)) / 60);
  const seconds = Math.floor(sec % 60);

  return [hours, minutes, seconds];
}

const _convertHrsToSec = (hrs) => hrs * 60 * 60;
const _convertMinToSec = (min) => min * 60;

export function totalHMSToSec(h, m, s) {
  return _convertHrsToSec(h) + _convertMinToSec(m) + s;
}

export function padTimeForDisplay(time) {
  return time.toString().length <= 1 ? `0${time}` : time;
}

export function createTime(timer) {
  return `${padTimeForDisplay(timer.hours)}:${padTimeForDisplay(timer.min)}:${padTimeForDisplay(timer.sec)}`;
}
