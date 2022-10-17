import React from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import Box from './Box'
export default function App() {
  const [City,SetCity]=React.useState('')
  const [Arr,SetArr]=React.useState([])
  const [Weather,SetWeather]=React.useState([])
  const[lat,Setlat]=React.useState(0)
  const [lon,Setlon]=React.useState(0)
  const[isRender,SetisRender]=React.useState(true)
    React.useEffect(()=>{
      if(lat>0){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`).then((res)=>{
        console.log(res)
        Weather.push((Math.floor(res.data.main.temp)),res.data.weather[0].main,res.data.weather[0].description)
            SetWeather(Weather)
            Arr.push({City,...Weather})
           do {
            Weather.splice(0,1)
           } while (Weather.length>0);
            SetArr(Arr)  
          SetisRender(true)
      })
      SetCity('')
    }
    return 
    },[lat]) 
  function showWeather(){
    if(City.length>0){
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=9e2676b5d5179f93b75b68b95d3b7bf3`)
      .then(res=>{
        Weather.splice(0,1)
        Weather.push(res.data[0].country)
        SetWeather(Weather)
        Setlat(res.data[0].lat)
        Setlon(res.data[0].lon)
      })
      
    }
    SetisRender(false)
  }
function addCity(event){
   SetCity(event.target.value)
}
  return (
    <div className="main">
      <Header></Header>
      <div className="search">
        <input type={'text'} placeholder='Search for the city' onChange={addCity} value={City}></input>
        <button onClick={showWeather}>SUBMIT</button>
      </div> 
      <div className="WeatherInfo">  
         <div className="Weather">
                {Arr.map((item)=>{
                  console.log(item)
                  return <Box item={item}></Box>
                })}
         </div>
      </div>
    </div>
  );
}
