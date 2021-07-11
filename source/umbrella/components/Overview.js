import React, { useState, useEffect, useContext } from 'react'
import request from 'request'
import Contexts from './Contexts'
import '../styles/overview.css'

const Overview = ({ setBackground }) => {

    const [details, setDetails] = useState({})
    const { city, unitSystem, units, API_KEY } = useContext(Contexts)

    let query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unitSystem}` 
    
    const getDetails = () => {
        request(query, { json: true }, (err, res) => {
            console.log('queried')
            if (res.body.message) { return console.log(res.body.message); }
            else {
                const newDetails = {
                    name: res.body.name,
                    temp: res.body.main.temp,
                    feels_like: res.body.main.feels_like,
                    pressure: res.body.main.pressure,
                    humidity: res.body.main.humidity,
                    temp_min: res.body.main.temp_min,
                    temp_max: res.body.main.temp_max,
                    sea_level: res.body.main.sea_level,
                    grnd_level: res.body.main.grnd_level,
                    weatherMain: res.body.weather[0].main,
                    weatherDesc: res.body.weather[0].description,
                    windSpeed: res.body.wind.speed,
                    windDeg: res.body.wind.deg,
                    windGust: res.body.wind.gust,
                    cloudiness: res.body.clouds.all
                }
                setDetails(newDetails)
            }
      });
    }
    useEffect(getDetails, [city, unitSystem])

    useEffect(() => {
        if (!details.weatherDesc)
            return

        switch(details.weatherDesc) {
            case 'clear sky': setBackground('#fcdf4e'); break
            case 'few clouds': setBackground('#e0e0e0'); break
            case 'scattered clouds': setBackground('#e0e0e0'); break
            case 'broken clouds': setBackground('#e0e0e0'); break
            case 'shower rain': setBackground('#9cb8bc'); break
            case 'rain': setBackground('#9cb8bc'); break
            case 'thundestorm': setBackground('#9cb8bc'); break
            case 'snow': setBackground('#e6f2f2'); break
            case 'mist': setBackground('#dee0e0'); break
            default: setBackground('white'); break
        }

    }, [details])

    return (
        <div className="umbrella__overview">
            <h1 className="umbrella__overview__city">{details.name}</h1>
            <h1 className="umbrella__overview__temperature">
                {details.temp} {units.temp[unitSystem]}
            </h1>
            <div className="umbrella__overview__weather">
                <h2 className="umbrella__overview__weather__main">{details.weatherMain},</h2> <h3 className="umbrella__overview__weather__desc">{details.weatherDesc}</h3>
            </div>
            <table className="umbrella__overview__table table table-hover">
                <tbody>
                    {(details.feels_like !== undefined) && <tr>
                        <td>Temperature feels like</td><td>{details.feels_like} {units.temp[unitSystem]}</td>
                    </tr>}
                    {(details.pressure !== undefined) && <tr>   
                        <td>Atmospheric pressure</td><td>{details.pressure} hPa</td>
                    </tr>}
                    {(details.humidity !== undefined) && <tr>    
                        <td>Humidity</td><td>{details.humidity} %</td>
                    </tr>}
                    {(details.temp_max !== undefined) && <tr>
                        <td>Maximum temperature</td><td>{details.temp_max} {units.temp[unitSystem]}</td>
                    </tr>}
                    {(details.temp_min !== undefined) && <tr>
                        <td>Minimum temperature</td><td>{details.temp_min} {units.temp[unitSystem]}</td>
                    </tr>}
                    {(details.sea_level !== undefined) && <tr>
                        <td>Atmospheric pressure on the sea level</td><td>{details.sea_level} hPa</td>
                    </tr>}
                    {(details.grnd_level !== undefined) && <tr>
                        <td>Atmospheric pressure on the ground level</td><td>{details.grnd_level} hPa</td>
                    </tr>}
                    {(details.windSpeed !== undefined) && <tr>
                        <td>Wind speed</td><td>{details.windSpeed} {units.speed[unitSystem]}</td>
                    </tr>}
                    {(details.windDeg !== undefined) && <tr>
                        <td>Wind direction</td><td>{details.windDeg} degrees</td>
                    </tr>}
                    {(details.windGust !== undefined) && <tr>
                        <td>Wind gust</td><td>{details.windGust} {units.speed[unitSystem]}</td>
                    </tr>}
                    {(details.cloudiness !== undefined) && <tr>
                        <td>Cloudiness</td><td>{details.cloudiness} %</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Overview