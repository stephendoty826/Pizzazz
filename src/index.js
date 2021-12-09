import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from "redux"
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import BaseLayout from "./components/layout/BaseLayout"
import Builder from './components/Builder'
import Cart from "./components/Cart"
import Deals from './components/Deals'
import reducer from "./reducers"

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



// const saveToLocalStorage = (reduxGlobalState) => { // uncomment to persist state

//   //serialization = converting js object to string
//   try{
//     const serializedState = JSON.stringify(reduxGlobalState)
//     localStorage.setItem("state", serializedState)
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// const loadFromLocalStorage = () => { // uncomment to persist state
  
//   // deserialize = converting string to js object
//   const serializedState = localStorage.getItem("state")

//   if(serializedState === null){
//     return undefined
//   }
//   else{
//     return JSON.parse(serializedState)
//   }

// }

// const persistedState = loadFromLocalStorage() // uncomment to persist state

// const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // uncomment to persist state

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{ // uncomment to persist state

//   // happens everytime there is a change to global state
//   saveToLocalStorage(store.getState())

// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

