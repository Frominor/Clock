import React from "react";
import right from './right.png'
export default function BreakLength({Break,SetBreak}){
    function AddBreak(){
        let br=Break+1
        SetBreak(br)
       }
       function MinusBreak(){
        let br=Break-1
       SetBreak(br)
       }
    return(
        <div className="BreakInfo">
            <h4>Break Length</h4>
            <div className="imgs">
    <img src={ right} onClick={AddBreak} className='plus'  ></img>
    <p>{Break}</p>
      <img src={ right} onClick={MinusBreak} className='minus'></img>
      </div>
        </div>
    )
}