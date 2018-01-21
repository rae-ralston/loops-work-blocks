let subTimerIdCount = 1
, displayTimerIdCount = 3

const _incrementTimerId = type => type === 'display' ? displayTimerIdCount ++ : subTimerIdCount ++

export function createSubTimer(totalSeconds, isCurrent, title, index) {
  return {
    id: _incrementTimerId('sub'),
    totalSeconds,
    title,
    isCurrent,
    index,
  }
}

export function createDisplayTimer(title) {
  return {
    id: _incrementTimerId('display'),
    title,
    isDisplayed: false,
    loopsMade: 0,
    subTimerCount: 0,
    subTimers: [],
  }
}

function _createTimeUnits(n) {
  var arr = Array.apply(null, Array(n))
  return arr.map((x, i) => i)
}

// +1 to be 0 indexed
export const hrs = _createTimeUnits(25)
export const min = _createTimeUnits(61)
export const sec = _createTimeUnits(61)