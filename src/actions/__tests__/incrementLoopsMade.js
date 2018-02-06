import incrementLoopsMade from '../incrementLoopsMade'
import { INCREMENT_LOOPS_MADE } from '../../constants'

it('Creates the incrementLoopsMade Action', () => {
  let createdAction = incrementLoopsMade(3)
  let action = { type: INCREMENT_LOOPS_MADE, displayTimerId: 3 }
  expect(createdAction).toEqual(action);
});
