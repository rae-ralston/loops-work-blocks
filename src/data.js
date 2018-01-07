import { createSubTimer } from './helpers'

const data = [
  {
    id: 1,
    title: 'first timer',
    isDisplayed: false,
    subTimers: [
      createSubTimer(5, 'rest'),
      createSubTimer(5, 'do'),
      createSubTimer(5, 'think'),
    ]
  },
  {
    id: 2,
    title: 'second timer',
    isDisplayed: true,
    subTimers: [
      createSubTimer(5, 'apple'),
      createSubTimer(5, 'orange'),
      createSubTimer(5, 'banana'),
    ]
  },
]

export default data
