import { MESSAGE, SUBMITFORM } from '../constants'

// Used to submit the form. Accepts an object with properties of firstName and lastName
export function formSubmit({firstName, lastName}) {
  return(dispatch) => {
    // change message to loading immediately
    dispatch(changeMessage("Loading..."))
    // waits 1.5 seconds the changes the message as well as submits the form to create a sort of api call feel.
    setTimeout(function() {
      dispatch(changeMessage("Done!"))
      dispatch({
        type: SUBMITFORM,
        payload: { firstName, lastName }
      })
      // 2 seconds after submission, will clear the message
      setTimeout(function() {
        dispatch(changeMessage(""))
      }, 2000);
    }, 1500);
  }
}

// accepts a payload of type 'string', which will be used to display a message
export function changeMessage(payload) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE,
      payload
    })
  }
}