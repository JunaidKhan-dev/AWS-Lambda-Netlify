const axios = require('axios')
require('dotenv').config()

const { API_URL, API_CLIENT_ID, API_CLIENT_SECRET } = process.env

exports.handler = function (event, context, callback) {
  console.log(JSON.stringify('Event: event'))
  // Lambda Code Here
  // context.succeed('Success!')
  // context.fail('Failed!')
  // const { name } = JSON.parse(event.body)

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`
  // send user response
  const send = (users) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(users)
    })
  }

  // perform the API call

  const getUsers = async () => {
    try {
      const users = await axios.get(URL)
      send(users.data)
    } catch (error) {
      send(error)
    }
  }

  // makesure method is get
  if (event.httpMethod === 'GET') {
    getUsers()
  }
}
