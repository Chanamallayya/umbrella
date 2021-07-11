import React, { useState } from 'react'

import Header from './Header'
import SearchBar from './SearchBar'
import Overview from './Overview'
import Graphs from './Graphs'
import Contexts from './Contexts'
import '../styles/umbrella.css'

const Umbrella = () => {

    const [city, setCity] = useState('')
    const [unitSystem, setUnitSystem] = useState('standard')
    const units = {
        temp: {
            'standard': 'K',
            'metric': 'C',
            'imperial': 'F'
        },
        speed: {
            'standard': 'meters/sec',
            'metric': 'meters/sec',
            'imperial': 'miles/hrs'
        },
        pressure: {
            'standard': 'hPa',
            'metric': 'hPa',
            'imperial': 'hPa'
        },
        wind_speed: {
            'standard': 'meter/sec',
            'metric': 'meter/sec',
            'imperial': 'miles/hr'
        },
        humidity: {
            'standard': '%',
            'metric': '%',
            'imperial': '%'
        },
        clouds: {
            'standard': '%',
            'metric': '%',
            'imperial': '%'
        }
    }

    const handleChangeUnitSystem = () => {
        if (unitSystem === 'standard')
            setUnitSystem('metric')
        else if (unitSystem === 'metric')
            setUnitSystem('imperial')
        else 
            setUnitSystem('standard')
    }
    const [background, setBackground] = useState('white')

    return (
        <div className="umbrella" style={{ backgroundImage: `radial-gradient(white, ${background})` }}>
            <Contexts.Provider value={{
                API_KEY: '4b8e1db824ce759ae99e32be188ef60f',
                city: city,
                unitSystem: unitSystem,
                units: units
            }}>
                <Header />
                <SearchBar setCity={setCity}/>
                {city && <div className="umbrella__change-units">
                    <span className="umbrella__change-units__view ">{unitSystem} </span>
                    <span 
                        className="umbrella__change-units__change badge badge-pill badge-primary"
                        onClick={handleChangeUnitSystem}
                    >Change unit system</span>
                </div>}
                {city && <Overview setBackground={setBackground} />}
                {city && <Graphs background={background}/>}
            </Contexts.Provider>
        </div>
    )
}

export default Umbrella