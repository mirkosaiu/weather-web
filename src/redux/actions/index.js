import Configuration from 'Main/configuration'
import Action from 'Redux/ActionNames'






export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}







export const fetchMeasurements2 = async (dispatch) => {
  const response = await fetch(`${Configuration.apiEndpoint}/api/measurements`)
  const payload = await response.json()
  dispatch({
    type: Action.FETCH_MEASUREMENTS,
    measurements: payload.measurements
  })
}










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
