import React from "react";
import play from './play.png'
import reset from './reset.png'
 export default function Display({Minutes,Seconds,Start,Reset}){
    return(
        <div className="display">
        <h3>Session</h3>
        <span>{Minutes<10?'0'+Minutes:Minutes}</span>
            <span>:</span>
            <span>{Seconds<10?Seconds+'0': Seconds}</span>
            <div><img src={play} onClick={Start}></img>
               <img src={reset} onClick={Reset}></img>
            </div>
           
            </div>
    )
 }