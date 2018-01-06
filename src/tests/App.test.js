import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from '../containers/App';

import reducers from '../reducers'; 
import dataReducer from '../reducers/dataReducer'
import * as actions from '../actions'
import * as types from '../constants';

const store = createStore(reducers)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, div);
});

describe('reducer tests', () => {
  it('should return initial state', () => {
    expect(
      dataReducer(undefined, {})
    )
    .toEqual(
      {
        message: null,
        data: []
      }
    )
  })
  
  it('should handle message change', () => {
    const message = "Running the test"
    expect(
      dataReducer(undefined, {
        type: types.MESSAGE,
        payload: message
      })
    ).toEqual({
      message,
      data: []
    })
  })

  it('should handle a form submission', () => {
    const newUser = { firstName: "bob", lastName: "builder" }
    expect(
      dataReducer(undefined, {
        type: types.SUBMITFORM,
        payload: newUser
      })
    ).toEqual({
      message: null,
      data:[
        newUser
      ]
    })
  })
})