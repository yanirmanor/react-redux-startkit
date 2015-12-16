import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import store from './store'

render(
  <div>
    
    <Provider store={store}>
       <App />
    </Provider>
     
   </div>
  ,
  document.getElementById('app')
)