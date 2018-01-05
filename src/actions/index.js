import { MESSAGE, SUBMITFORM } from '../constants'

// Used to submit the form. Accepts an object with properties of firstName and lastName
export function formSubmit({firstName, lastName}) {
  return(dispatch) => {
    dispatch(changeMessage("Loading..."))
    setTimeout(function() {
      dispatch(changeMessage("Done!"))
      dispatch({
        type: SUBMITFORM,
        payload: { firstName, lastName }
      })
    }, 1500);
  }
}

export function changeMessage(payload) {
  return (dispatch) => {
    dispatch({
      type: MESSAGE,
      payload
    })
  }
}