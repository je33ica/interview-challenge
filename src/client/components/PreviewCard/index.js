import React from "react";
import "./Previewcard.css";
import DietarySymbols from "../DietarySymbols";

const PreviewCard = ({ previewCard, removePreviewCard, minusCount }) => {
  const { name, id, dietaries } = previewCard;

  return (
    <>
      <div className="card">
        <h2>{name} </h2>

        {dietaries?.length > 0 && (
          <DietarySymbols dietaries={dietaries}></DietarySymbols>
        )}

        <button
          onClick={() => {
            removePreviewCard(previewCard);
            minusCount();
          }}
          className="remove-item"
        >
          x
        </button>
      </div>
    </>
  );
};

export default PreviewCard;
