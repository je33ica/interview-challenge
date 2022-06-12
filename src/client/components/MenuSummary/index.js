import React from "react";
import "./MenuSummary.css"

const MenuSummary = ({count})=> 

{
  function MenuCount(){
    return <span> {count} items </span>
  }
  
    return (
        <>
         <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
           <MenuCount />
          </div>
          <div className="col-6 menu-summary-right">
          
          
          </div>
        </div>
      </div>
    </div></>
    )
}

export default MenuSummary;