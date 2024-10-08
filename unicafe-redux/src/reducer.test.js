import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  const modifiedState = {
    good: 1,
    ok: 1,
    bad: 1
  }


  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = modifiedState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 2,
      ok: 1,
      bad: 1
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = modifiedState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 2,
      bad: 1
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = modifiedState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 1,
      bad: 2
    })
  })

  test('reset stats is incremented', () => {
    const action = {
      type: 'ZERO'
    }
    const state = modifiedState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})
