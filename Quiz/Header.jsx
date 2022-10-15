import React from "react";
function Header({weather=0}) {
 console.log(weather)
  return(
    <div className="header">
        <h1>Simple Weather App</h1>
      </div>
  )
}
export default Header;
