import { MESSAGE, SUBMITFORM } from '../constants';

const INITIAL_STATE = {
  message: null,
  data: []
}

export default function dataReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case SUBMITFORM:
      return {
        ...state,
        data: [ ...state.data, action.payload ]
      }

    case MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    
    default:
      return state;
  }
} 