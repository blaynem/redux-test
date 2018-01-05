import { SUBMITFORM } from '../constants';

const INITIAL_STATE = {
  loading: false,
  data: [
    {
      firstName: "Dumbo",
      lastName: "Johnson"
    },
    {
      firstName: "John",
      lastName: "Snausage"
    },
    {
      firstName: "Dwayne",
      lastName: "The Rock"
    }
  ]
}

export default function dataReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case SUBMITFORM:
      return {
        ...state,
        data: [ ...state.data, action.payload ]
      }
    
    default:
      return state;
  }
} 