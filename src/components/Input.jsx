import React from 'react'
import {useWeather} from '../context/Weather';
const Input = () => {
  const weather = useWeather();
  return (
   <input type="text"
    placeholder="Search Here"
    value={weather.searchCity}
    onChange={(e)=> weather.setSearchCity(e.target.value)}
   />
  )
}

export default Input;
