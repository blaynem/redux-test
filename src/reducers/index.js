import { combineReducers } from 'redux';
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  formData: dataReducer
});

export default rootReducer;