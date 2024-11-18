import { useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import {useWeather} from './context/Weather';

const App = () => {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchCurrentData();
  },[]);

  return (
    <div className="App">
    <h1>Weather</h1>
    <Input/>
    <Button onClick={weather.fetchData} name="Search"/>
    <Card/>
    <Button onClick={()=>window.location.reload()} name="Refresh"/>
    </div>
  );
}

export default App;
