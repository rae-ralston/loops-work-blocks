let subTimerId = 1
const incrementSubTimerId = () => subTimerId ++

export default function createSubTimer(totalSeconds, isCurrent, title, index) {
  return {
    id: incrementSubTimerId(),
    totalSeconds,
    title,
    isCurrent,
    index,
  }
}
