import axios from 'axios'

function sendPreferences(preferences) {
  console.log(preferences)
  var config = {
    method: 'post',
    url: 'http://0.0.0.0:8080/create-range',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: preferences,
  }

  axios(config)
    .then(function (response) {
      var resp = JSON.stringify(response.data)
      var obj = JSON.parse(resp)
      //setId(obj.id)
      console.log(obj)
    })
    .catch(function (error) {
      console.error(error)
    })
}

export default sendPreferences
