import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = configureStore({ reducer })

console.log(store.getState())

export default store
