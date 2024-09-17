import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
/* 
    filterReducer(state = '', action) {
      console.log('ACTION: ', action)
      switch (action.type) {
        case 'SET_FILTER':
          return action.payload
        default:
          return state
      }    
    },
 */    
    filterChange(state, action) {
      return action.payload
    }
  }
})
/* 
const filterReducer = (state = '', action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    payload: filter,
  }
}

export default filterReducer
 */
export const { filterChange } = filterSlice.actions
export default filterSlice.reducer
