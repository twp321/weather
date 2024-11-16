
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
    <h2>Weather</h2>
    <Input/>
    <Button name="Search"/>
    <Card/>
    <Button name="Refresh"/>
    </div>
  );
}

export default App;
