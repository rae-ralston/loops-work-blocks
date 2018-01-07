let subTimerId = 1
function incrementSubTimerId() {
  return subTimerId ++
}

export function createSubTimer(time, title) {
  return {
    id: incrementSubTimerId(),
    time,
    title
  }
}
