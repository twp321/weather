export const getWeatherDataForCity = async (city) =>{
    let url = `${process.env.REACT_APP_API_URL}&q=${city}&aqi=yes`;
    const response =  await fetch(url);
       return response.json();
}

export const getWeatherDataForLocation = async (lat,long) =>{
    let url = `${process.env.REACT_APP_API_URL}&q=${lat},${long}&aqi=yes`;
    const response =  await fetch(url);
     return response.json();
}