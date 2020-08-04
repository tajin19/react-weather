import fetch from 'cross-fetch'
import Creators from './actions'
import RequestBuilder from '../util/requestBuilder'

const requestCurrentWeatherByZip = Creators.requestCurrentWeatherByZip
const receiveCurrentWeatherByZipCode = Creators.receiveCurrentWeatherByZipCode

// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
const fetchCurrentWeatherJson = (zipCode) => {
  debugger
  return dispatch => {
    dispatch(requestCurrentWeatherByZip(zipCode))
    const request = new RequestBuilder()
    return fetch(request)
    .then(response => response.json())
    .then(json => {
      const responseData = json
      let data = []
      debugger
      responseData.data.children.map(child => {
        const childData = {
          title: child.data.title,
          url: child.data.permalink
        }

        data.push(childData)
        return null
      })

      // Dispatching this action while passing the 'data' array
      // we created above will update the store with this data.
      // It is good practice to send only the required information
      // rather than trimming the data when and where it is used.
      // This is why we aren't sending the entire JSON response to
      // the Redux store.
      dispatch(receiveCurrentWeatherByZipCode(data))
    })
  }
}

export default {
  fetchCurrentWeatherJson
}