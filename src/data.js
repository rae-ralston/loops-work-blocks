import { createSubTimer } from './helpers'

const data = [
  {
    id: 1,
    title: 'serious list',
    isDisplayed: false,
    subTimers: [
      createSubTimer(0, 5, 0, true, 'rest'),
      createSubTimer(0, 20, 0, false, 'do'),
      createSubTimer(1, 10, 0, false, 'think'),
    ]
  },
  {
    id: 2,
    title: 'fruits list',
    isDisplayed: true,
    subTimers: [
      createSubTimer(0, 7, 30, false, 'apple'),
      createSubTimer(1, 3, 27, true, 'orange'),
      createSubTimer(0, 4, 2, false, 'banana'),
    ]
  },
]

export default data
