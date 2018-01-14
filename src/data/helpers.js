let subTimerIdCount = 1
, displayTimerIdCount = 3

const incrementTimerId = type => type === 'display' ? displayTimerIdCount ++ : subTimerIdCount ++

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
    title,
    isDisplayed: false,
    subTimerCount: 0,
    subTimers: [],
  }
}

export const hrs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
export const min = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
export const sec = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
