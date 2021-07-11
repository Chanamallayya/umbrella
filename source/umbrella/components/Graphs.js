import React, { useState, useEffect, useContext } from 'react'
import request from 'request'
import Chart from 'react-google-charts'
import Contexts from './Contexts'
import '../styles/graphs.css'

const Graphs = () => {

    const { city, unitSystem, units, API_KEY } = useContext(Contexts)
    const [parameter, setParameter] = useState('temp')
    const [cities, setCities] = useState([city])
    const [details1, setDetails1] = useState([])
    const [details2, setDetails2] = useState([])
    const [details3, setDetails3] = useState([])
    const [details4, setDetails4] = useState([])
    const [details5, setDetails5] = useState([])
    const [details6, setDetails6] = useState([])
    const [data, setData] = useState([])
    const [newCity, setNewCity] = useState('')

    const getDetails = () => {
        const cityName = cities[cities.length - 1]
        if (!cityName)
            return
        let cityQuery = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        let lat, lon
        request(cityQuery, { json: true }, (err, res) => {
            if (res.body.message) { console.log(res.body.message) }
            else {
                lat = res.body.coord.lat
                lon = res.body.coord.lon
            }
            
            let time = parseInt(Date.now() / 1000) - (5 * 24 * 60 * 60)
                    let query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    request(query, { json: true }, (err, res) => {
                        console.log('queried history')
                        if (err)
                            console.log(err)
                        else {
                            setDetails1([...details1, res.body.hourly])
                        }
                    })

                    time = parseInt(Date.now() / 1000) - (4 * 24 * 60 * 60)
                    query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    request(query, { json: true }, (err, res) => {
                        console.log('queried history')
                        if (err)
                            console.log(err)
                        else {
                            setDetails2([...details2, res.body.hourly])
                        }
                    })

                    time = parseInt(Date.now() / 1000) - (3 * 24 * 60 * 60)
                    query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    request(query, { json: true }, (err, res) => {
                        console.log('queried history')
                        if (err)
                            console.log(err)
                        else {
                            setDetails3([...details3, res.body.hourly])
                        }
                    })

                    time = parseInt(Date.now() / 1000) - (2 * 24 * 60 * 60)
                    query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    
                    request(query, { json: true }, (err, res) => {
                        if (err)
                            console.log(err)
                        else {
                            setDetails4([...details4, res.body.hourly])
                        }
                    })

                    time = parseInt(Date.now() / 1000) - (1 * 24 * 60 * 60)
                    query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    request(query, { json: true }, (err, res) => {
                        console.log('queried history')
                        if (err)
                            console.log(err)
                        else {
                            setDetails5([...details5, res.body.hourly])
                        }
                    })

                    time = parseInt(Date.now() / 1000) - (1 * 24 * 60 * 60)
                    query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                    console.log(query)
                    request(query, { json: true }, (err, res) => {
                        console.log('queried history')
                        if (err)
                            console.log(err)
                        else {
                            setDetails6([...details6, res.body.hourly])
                        }
                    })

        })
    }

    const updateDetailsWithUnitSystem = () => {
        cities.forEach(cityName => {
            let cityQuery = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            let lat, lon
            request(cityQuery, {json: true}, (err, res) => {
                if (res.body.message) { console.log(res.body.message) }
                else {
                    lat = res.body.coord.lat
                    lon = res.body.coord.lon
                }
                
                let time = parseInt(Date.now() / 1000) - (5 * 24 * 60 * 60)
                let query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                request(query, { json: true }, (err, res) => {
                    console.log('queried history')
                    if (err)
                        console.log(err)
                    else {
                        setDetails1([...details1, res.body.hourly])
                    }
                })

                time = parseInt(Date.now() / 1000) - (4 * 24 * 60 * 60)
                query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                request(query, { json: true }, (err, res) => {
                    console.log('queried history')
                    if (err)
                        console.log(err)
                    else {
                        setDetails2([...details2, res.body.hourly])
                    }
                })

                time = parseInt(Date.now() / 1000) - (3 * 24 * 60 * 60)
                query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                request(query, { json: true }, (err, res) => {
                    console.log('queried history')
                    if (err)
                        console.log(err)
                    else {
                        setDetails3([...details3, res.body.hourly])
                    }
                })

                time = parseInt(Date.now() / 1000) - (2 * 24 * 60 * 60)
                query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                
                request(query, { json: true }, (err, res) => {
                    if (err)
                        console.log(err)
                    else {
                        setDetails4([...details4, res.body.hourly])
                    }
                })

                time = parseInt(Date.now() / 1000) - (1 * 24 * 60 * 60)
                query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                request(query, { json: true }, (err, res) => {
                    console.log('queried history')
                    if (err)
                        console.log(err)
                    else {
                        setDetails5([...details5, res.body.hourly])
                    }
                })

                time = parseInt(Date.now() / 1000) - (1 * 24 * 60 * 60)
                query = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=${unitSystem}`
                console.log(query)
                request(query, { json: true }, (err, res) => {
                    console.log('queried history')
                    if (err)
                        console.log(err)
                    else {
                        setDetails6([...details6, res.body.hourly])
                    }
                })
            })
        })
    }
    
    useEffect(getDetails, [cities])
    useEffect(updateDetailsWithUnitSystem, [unitSystem])
    const updateData = () => {
        if (!details1[0])
            return
        let newData = [['x', ...cities]]
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i,
                    ...details1.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i + 24,
                    ...details2.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i + 48,
                    ...details3.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i + 72,
                    ...details4.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i + 96,
                    ...details5.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
            for (let i = 0; i < 24; i++) {
                newData.push([
                    i + 120,
                    ...details6.slice(-cities.length).map(detail => {
                        switch(parameter) {
                            case 'temp': return detail[i].temp
                            case 'wind_speed': return detail[i].wind_speed
                            case 'pressure': return detail[i].pressure
                            case 'humidity': return detail[i].humidity
                            case 'clouds': return detail[i].clouds
                        }
                    }),
                ])
            }
        setData(newData)
    }
    useEffect(updateData, [details1, details2, details3, details4, details5, details6, parameter])

    useEffect(() => {
        setDetails1([])
        setDetails2([])
        setDetails3([])
        setDetails4([])
        setDetails5([])
        setDetails6([])
        setCities([city])
    }, [city])

    const handleAddCity = e => {
        e.preventDefault()
        console.log('1',cities)
        setCities([...cities, newCity])
        console.log('2', cities)
        setNewCity('')
    }

    const removeCity = (cityNameToRemove) => {
        setCities(cities.filter(cityName => cityName !== cityNameToRemove))
    }

    return (
        <div className="umbrella__graphs">
            <Chart 
                width={'70vw'}
                height={'60vh'}
                chartType="LineChart"
                loader={<div>Loading Chart </div>}
                data={data}
                options={{
                    title: `${parameter} in ${units[parameter][unitSystem]}`,
                    hAxis: {
                        title: 'Last 5 days (hourly)'
                    },
                    vAxis: {
                        title: parameter
                    }
                }}
            />

                <form
                    className="umberlla__graphs__add-cities"
                    onSubmit={handleAddCity}
                    >
                    <input
                        className="umbrella__graphs__add-cities__input col-form-label col-form-label-lg" 
                        value={newCity}
                        onChange={e => setNewCity(e.target.value)}
                        placeholder="Add new city"
                    />
                    <input 
                        className="umbrella__graphs__add-cities__submit btn btn-primary"
                        value="Add"
                        type="submit"
                    />
                </form>


            {details1[0] && <div className="umbrella__graphs__parameters">
                {details1[0][0].temp && 
                    <div 
                        className={"umbrella__graphs__parameters__parameter btn btn-primary " + ((parameter === 'temp') ? 'btn-danger' : '')}
                        onClick={() => setParameter('temp')}
                    >Temperature</div>}
                {details1[0][0].wind_speed && 
                    <div 
                        className={"umbrella__graphs__parameters__parameter btn btn-primary " + ((parameter === 'wind_speed') ? 'btn-danger' : '')}
                        onClick={() => setParameter('wind_speed')}
                    >Wind speed</div>} 
                {details1[0][0].pressure && 
                    <div 
                        className={"umbrella__graphs__parameters__parameter btn btn-primary " + ((parameter === 'pressure') ? 'btn-danger' : '')}
                        onClick={() => setParameter('pressure')}
                    >Pressure</div>}
                {details1[0][0].humidity && 
                    <div 
                        className={"umbrella__graphs__parameters__parameter btn btn-primary " + ((parameter === 'humidity') ? 'btn-danger' : '')}
                        onClick={() => setParameter('humidity')}
                    >Humidity</div>} 
                {(details1[0][0].clouds !== undefined) && 
                    <div 
                        className={"umbrella__graphs__parameters__parameter btn btn-primary " + ((parameter === 'clouds') ? 'btn-danger' : '')}
                        onClick={() => setParameter('clouds')}
                    >Cloudiness</div>} 
            </div>}
        </div>
    )
}


export default Graphs