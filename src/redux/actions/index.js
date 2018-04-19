import Configuration from 'Main/configuration'
import Action from 'Redux/ActionNames'



export function fetchMeasurements() {
  return dispatch => {
    dispatch(requestMeasurements())
    return fetch(`${Configuration.apiEndpoint}/api/measurements`)
      .then(response => response.json())
      .then(json => dispatch(receiveMeasurements(json)))
  }
}
function requestMeasurements() {
  return {
    type: Action.REQUEST_MEASUREMENTS,
  }
}
function receiveMeasurements(json) {
  return {
    type: Action.RECEIVE_MEASUREMENTS,
    payload: json,
    receivedAt: Date.now()
  }
}
