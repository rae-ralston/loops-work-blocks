import newDisplayTimer from '../newDisplayTimer'
import { NEW_DISPLAY_TIMER } from '../../constants'

it('Creates the newDisplayTimer Action', () => {
  let createdAction = newDisplayTimer('Timers Are Fun!')
  let action = { type: NEW_DISPLAY_TIMER, title: 'Timers Are Fun!' }
  expect(createdAction).toEqual(action);
});
