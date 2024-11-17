import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity ,getWeatherDataForLocation} from "../api";

export const weatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(weatherContext);
}

export const WeatherProvider = (props) => {
  
     const [data,setData] = useState(null);
     const [searchCity,setSearchCity] = useState();

     const fetchData = async() =>{
         const response = await getWeatherDataForCity(searchCity);
         setData(response);
     }
     const fetchCurrentData = () => { 
      navigator.geolocation.getCurrentPosition((position)=>{ 
        console.log('position',position)
        getWeatherDataForLocation(
          position.coords.latitude,
          position.coords.longitude).then((data) => setData(data));
      });
  }
    return  (<weatherContext.Provider value={{searchCity,data,fetchData,setSearchCity,fetchCurrentData}}>
        {props.children}
      </weatherContext.Provider>)
}


