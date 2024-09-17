import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
/* 
    clearNotification(state, action) {
      return ''
    }
 */
  }
})
/* 
export const addNotification = (setNotification) => {
  return {
    type: 'notification/setNotification',
    payload: setNotification
  }
}

export const removeNotification = () => {
  return {
    type: 'notification/setNotification',
    payload: ''
  }
}
 */
/* 
export const showNotification = (message, time) => {
  return async dispatch => {
    setTimeout(() => { dispatch(clearNotification()) }, time * 1000)
    dispatch(setNotification(message))
  }
}
 */
export const { setNotification/* , clearNotification */ } = notificationSlice.actions
export default notificationSlice.reducer
