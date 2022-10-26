import React from "react";
import right from './right.png'
export default function SessionLength({Minutes,SetMinutes}){
  const [Session,SetSession]=React.useState(Minutes)
  function AddTime(){
    SetSession(Session+1)
   }
   React.useEffect(()=>{
   SetMinutes(Session)
   },[Session])
   function MinusTime(){
    SetSession(Session-1)
    SetMinutes(Minutes-1)
   }
   React.useEffect(()=>{
        if(Minutes==25){
          SetSession(25)
        }
   },[Minutes])
    return(
        <div className="SessionLength">
          <h4>Session Length</h4>
      <div className="imgs">
      <img src={right}  onClick={AddTime} className='plus'></img>
        <p>{Session}</p>
      <img src={right}  onClick={MinusTime} className='minus'></img>
      </div>
    </div>
    )
}