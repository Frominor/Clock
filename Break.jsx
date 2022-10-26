import React from "react";
export default function Break({Minutes,Seconds}){
    return(
        <div className="Break"><div className="time">
            <p>Relax</p>
          <span>{Minutes<10? '0'+ Minutes:Minutes}</span>
              <span>:</span>
              <span>{Seconds<10?Seconds+'0':Seconds}</span>
        </div></div>
    )
}