import React from 'react'
import { render } from 'react-dom'

import Umbrella from './components/Umbrella.js'

const app = document.getElementById('app')

render(<Umbrella />, app)

/*
import request from 'request'

API_KEY = '9aa56542f00abaf449766ad79654574f'
cityName = 'Bengaluru'
query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

request(query, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  else {
    console.log(res.body)
  }
});
*/