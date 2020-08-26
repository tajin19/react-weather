import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { act } from 'react-dom/test-utils'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from '../App.js'
import rootReducer from '../reducers'
    
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
describe('App Root', () => {
    it('renders without crashing', () => {
      act(() => {
        const div = document.createElement('div')
        ReactDOM.render(<React.StrictMode>
          <Provider store={store}>
            <App/>
          </Provider>
        </React.StrictMode>, div)
      })
    })
})