import { combineReducers } from 'redux'
import Action from 'Redux/ActionNames'

// it's the reducer that define the shape of the state (which is stored in memory, i.e. it's not peristent)

const measurements2 = (state = { measurements: [] }, action) => {
  switch (action.type) {
    case Action.FETCH_MEASUREMENTS:
      return { measurements: action.measurements }
    default:
      return state
  }
}






const initialState = {
  isFetching: false,
  items: []
}

const measurements = (state = initialState, action) => {
  switch (action.type) {
    case Action.REQUEST_MEASUREMENTS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case Action.RECEIVE_MEASUREMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.measurements,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}








export default combineReducers({
  measurements
})
