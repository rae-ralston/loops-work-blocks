import data from './data'
console.log(data)
let subTimerIdCount = 1
, displayTimerIdCount = 1

const incrementTimerId = (type) => type === 'display' ? displayTimerIdCount ++ : subTimerIdCount ++

export function createSubTimer(totalSeconds, isCurrent, title, index) {
  return {
    id: incrementTimerId('sub'),
    totalSeconds,
    title,
    isCurrent,
    index,
  }
}

export function createDisplayTimer(title) {
  return {
    id: incrementTimerId('display'),
    isDisplayed: false,
    subTimerCount: 0,
    subTimers: [],
  }
}
