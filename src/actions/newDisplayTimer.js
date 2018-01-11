import { NEW_DISPLAY_TIMER } from '../constants'

export default function newDisplayTimer() {
  console.log('in newDisplayTimer')
  return {
    type: NEW_DISPLAY_TIMER
  }
}
