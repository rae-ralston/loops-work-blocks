import newSubTimer from '../newSubTimer'
import { NEW_SUB_TIMER } from '../../constants'

it('creates the newSubTimer Action', () => {
  let createdAction = newSubTimer(2, 'I\'m a new Sub Timer', 327)
  let action = {
    type: NEW_SUB_TIMER,
    displayTimerId: 2,
    title: 'I\'m a new Sub Timer',
    totalTime: 327,
  }
  expect(createdAction).toEqual(action)
})
