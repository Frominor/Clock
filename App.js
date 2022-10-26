import React from "react";
import "./App.css";
import SessionLength from './SessionLength'
import BreakLength from './BreakLength'
import Breakk from './Break'
import  Display from './Display'
export default function App() {
  const [Minutes,SetMinutes]=React.useState(1)
  const [Seconds,SetSeconds]=React.useState(0)
  const [Break,SetBreak]=React.useState(5)
 const [isActive,SetisActive]=React.useState(false)
   const [bool,setBool]=React.useState(false)
   function Reset(){
    setBool(false)
    SetMinutes(25)
    SetBreak(5)
   
   }
 function Start(){
  setBool(true)
 }
 React.useEffect(()=>{  
  if(bool==true){
    let interval=setInterval(()=>{
      clearInterval(interval)
      if(Seconds===0){
       if(Minutes!==0){
         SetMinutes(Minutes-1)
         SetSeconds(59)
       }else{
         let minutes=isActive?Minutes-1:Break-1
         let seconds=59
         SetSeconds(seconds)
         SetMinutes(minutes)
         SetisActive(!isActive)
       }
      }else{
       SetSeconds(Seconds-1)
      }
     },1000)}else{
      SetSeconds(0)
     }
 },[Seconds,bool])

  return (
    <div className="main" >
      {isActive==true?<Breakk Minutes={Minutes} Seconds={Seconds}></Breakk>:<div><div className="timer">
          <div className="Name"><h2>POMODORO CLOCK</h2></div>
          <BreakLength Break={Break} SetBreak={SetBreak}></BreakLength>
   <SessionLength Minutes={Minutes}   SetMinutes={SetMinutes}></SessionLength>
         <Display Minutes={Minutes} Seconds={Seconds} Start={Start} Reset={Reset}></Display>
       </div>
  </div>}  
   <h1>Designed By Frominor</h1> 
    </div>
  );
}