import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from '../pages/containers/home'
// import data from '../api.json'
import data from '../schemas'
import reducer from '../reducers/data'

console.log(data);

const initialState = {
  data: {
    // ...data,
    entities: data.entities,
    categories: data.result.categories,
  },
  search: []
}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer)
