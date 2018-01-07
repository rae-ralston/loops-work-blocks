import { createSubTimer } from './helpers'

const data = [
  {
    id: 1,
    title: 'serious list',
    isDisplayed: false,
    subTimerCount: 0,
    subTimers: [
      createSubTimer(450, true, 'rest'),
      createSubTimer(3807, false, 'do'),
      createSubTimer(242, false, 'think'),
    ]
  },
  {
    id: 2,
    title: 'fruits list',
    isDisplayed: true,
    subTimerCount: 0,
    subTimers: [
      createSubTimer(300, false, 'apple'),
      createSubTimer(1200, true, 'orange'),
      createSubTimer(4200, false, 'banana'),
    ]
  },
]

export default data
