import { ADD_REMINDER } from './constants';

//action creator that adds the text to the Add Reminder button
export const addReminder = (text) => {
  //define an action
  const action = {
    type: ADD_REMINDER,
    text: text //this is the payload
  }
  console.log('action in addReminder', action);
  return action;

}