import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "f3a180525910523efb816d924361d1d3"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    axios.get(url)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    
   
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  return (
    <>
    <main className={`flex justify-center items-center px-4 ${weatherInfo?.weather[0].main}`}>
      <Weather weatherInfo={weatherInfo} />
    </main>
    </>
    
  )
}

export default App
