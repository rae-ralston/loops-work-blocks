import updateDisplayTimerTitle from '../updateDisplayTimerTitle'
import { UPDATE_DISPLAY_TIMER_TITLE } from '../../constants'

it('Creates the updateDisplayTimerTitle Action', () => {
  let createdAction = updateDisplayTimerTitle(3, 'Such a pretty new title.')
  let action = {
    type: UPDATE_DISPLAY_TIMER_TITLE,
    displayTimerId: 3,
    title: 'Such a pretty new title.',
  }
  expect(createdAction).toEqual(action)
})
