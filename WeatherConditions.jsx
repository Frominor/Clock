import React from "react";
export default function WeatherConditions({item}){
    return(
        <div>
            <h4>{item.toUpperCase()}</h4>
        </div>
    )
}
