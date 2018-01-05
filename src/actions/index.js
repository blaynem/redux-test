import { SUBMITFORM } from '../constants'

// Used to submit the form. Accepts an object with properties of firstName and lastName
export function formSubmit({firstName, lastName}) {
  return(dispatch) => {
    dispatch({
      type: SUBMITFORM,
      payload: { firstName, lastName }
    })
  }
}