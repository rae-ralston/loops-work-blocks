import { createSubTimer } from '../helpers'

const data = [
  {
    id: 1,
    title: 'serious list',
    isDisplayed: false,
    subTimerCount: 0,
    subTimers: [
      createSubTimer(450, true, 'rest', 1),
      createSubTimer(3807, false, 'do', 2),
      createSubTimer(242, false, 'think', 3),
    ]
  },
  {
    id: 2,
    title: 'fruits list',
    isDisplayed: true,
    subTimerCount: 0,
    subTimers: [
      createSubTimer(300, false, 'apple', 1),
      createSubTimer(1200, true, 'orange', 2),
      createSubTimer(4200, false, 'banana', 3),
    ]
  },
]

export default data
