import './App.css';
import ReactWeather from 'react-open-weather-widget';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import { useEffect, useState } from 'react';
import AreaSearch from './components/AreaSearch';



function App() {
  const [areaInfo,setAreaInfo] = useState(undefined)

  const currentPostion = () => {
    const positionCurrent =  navigator.geolocation.getCurrentPosition((position)=>{
        const { latitude, longitude } = position.coords;
        console.log(latitude,longitude)
        setAreaInfo({ lat: String(latitude), lon: String(longitude) })
    })

}
  useEffect(()=>{
    currentPostion();
  },[])

  return (
    <div className="App">
    
    <AreaSearch setAreaInfo={setAreaInfo} />
    {areaInfo && <ReactWeather
      forecast="5days"
      apikey="weather_API_KEY"
      type="geo"
      lat={areaInfo.lat}
      lon={areaInfo.lng}
    />
    }
    </div>
  );
}

export default App;
