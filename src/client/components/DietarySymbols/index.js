import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./dietarySymbols.css";

const DietarySymbols = ({ dietaries }) => {

  return (
    <div>
      {dietaries.map((dietary) => {
        return (
          <span key={uuidv4()} className="dietary" >
            {dietary}
           
          </span>
        );
      })}
    </div>
  );
};

export default DietarySymbols;
