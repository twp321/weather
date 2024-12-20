import React from "react";
import {useWeather} from '../context/Weather'
const Card = () =>{
    const weather = useWeather();
    return <div className="weather-card">
          <img src={weather?.data?.current?.condition
?. icon} alt={weather?.data?.current?.condition
?. text} title={weather?.data?.current?.condition
    ?. text}/>
          <h2>{weather?.data?.current?.temp_c}</h2>
          <h4>{weather?.data?.location?.name}, {weather?.data?.location?.region} {weather?.data?.location?.country}</h4>          
    </div>
}

export default Card;