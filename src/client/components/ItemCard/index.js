import React from "react";
import DietarySymbols from "../DietarySymbols";

import "./ItemCard.css";

const ItemCard = ({ id, name, dietaries, updateCount, addPreviewCard }) => {
  return (
    <>
      <div
        onClick={() => {
          updateCount(1);
          addPreviewCard({ id, name, dietaries });
        }}
        className="card"
      >
        <h2>{name} </h2>

        {dietaries?.length > 0 && (
          <DietarySymbols dietaries={dietaries}></DietarySymbols>
        )}
      </div>
    </>
  );
};

export default ItemCard;


