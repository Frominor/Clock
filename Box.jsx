import React from "react";
import Celsius from './Img/celsius.png'
import Sun from './Img/sun.png'
import Cloud from './Img/cloud.png'
import Rain from './Img/rain.png'
import WeatherCondition from './WeatherСondition'
export default function Box({item}){
    return(
        <div className="Box"><div className="NameOfCity"><h2>{item.City} </h2><div className="Abbr"><h3>{item[0]}</h3></div></div> <div className="TempInCity"> <h3>{item[1]-273}</h3><div className="div"><img src={Celsius} className='cel'></img> 
                  </div> </div>
                    {item[2]=='Clouds'?<img src={Cloud}></img>:<span></span>}
                    {item[2]=='Clear'?<img src={Sun}></img>:<span></span>}
                    {item[2]=='Rain'?<img src={Rain}></img>:<span></span>}
                    <WeatherCondition item={item[3]}></WeatherCondition>
                    </div>
    )
}