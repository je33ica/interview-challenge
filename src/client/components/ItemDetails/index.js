import React from "react";
import ItemCard from "../ItemCard";


const ItemDetails = ({ items, updateCount, addPreviewCard }) => {

  return (
    <div >
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            name={item.name}
            id={item.id}
            dietaries={item.dietaries}
            updateCount={updateCount}
            addPreviewCard={addPreviewCard}
          ></ItemCard>
          
        );
      })}
 
    </div>
  );
};

export default ItemDetails;

