import React, { useState } from 'react'

const Weather = ({weatherInfo}) => {
  const [isCelsius, setIsCelsius] = useState(true)  
  const kelvinToCelsius =(tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1)
  }
  const kelvinToF = (tempKelvin) => {
    return (((tempKelvin-273.15) * 9/5)+32).toFixed(1)
  }
  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius)
  }
  const resultTempConversion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToF(weatherInfo?.main.temp)
   
  return (
    <section className="text-center">
      <h1 className='m-5 font-bold text-5xl text-slate-800 '>{weatherInfo?.name} </h1>
      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
      <section className='bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center  shadow-xl' >
        <h4 className='col-span-2 text-4xl'>{weatherInfo?.weather[0].description}</h4>
        <span className='text-6xl'>{resultTempConversion}°{isCelsius ? "C" : "F"}</span>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}/>
        </div>
      </section>
      <section className='bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1  shadow-xl' >
        <article className='flex gap-2 items-center justify-center' >
          <div className='w-[18px]' >
            <img src={"/images/wind.png"} alt="" />
          </div>
          <span>{weatherInfo?.wind.speed}m/s</span>
        </article>
        <article className='flex gap-2 items-center justify-center' >
          <div className='w-[18px]' >
            <img src={"/images/humidity.png"} alt="" />
          </div>
          <span>{weatherInfo?.main.humidity}%</span>
        </article>
        <article className='flex gap-2 items-center justify-center' >
          <div className='w-[18px]' >
            <img src={"/images/preassure.png"} alt="" />
          </div>
          <span>{weatherInfo?.main.pressure}</span>
        </article>
      </section>
      </section>
      <button onClick={handleChangeUnitTemp} className='py-2 px-7 rounded-full bg-neutral-200 shadow-lg shadow-cyan-500/50  mt-4 text-sky-500 font-semibold'>Cambiar a {isCelsius ? "F" : "C"}°</button>
    </section>

  )
}

export default Weather