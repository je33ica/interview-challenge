import React, { useState } from "react";
import "./Page.css";
import ItemContainer from "../components/ItemContainer";
import PreviewCard from "../components/PreviewCard";
import MenuSummary from "../components/MenuSummary";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [count, setCount] = useState(0);
  const [previewCards, setPreviewCards] = useState([]);
  const [removeCard, setRemoveCard] = useState([]);
  const [dietary, setDietaryAmount] = useState([]);

  const addPreviewCard = (card) => {
    setPreviewCards([...previewCards, card]);
  };

  const removePreviewCard = (card) => {
    const index = previewCards.indexOf(card);
    const remove = previewCards.splice(index, 1);
    setRemoveCard(remove);
  };

  const updateCount = (newCount) => {
    setCount(count + newCount);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  //Right place ?
  const countDietary = () => {
    //logic to map over dietary in each card in preview
    //update dietary counter in MenuSummary
  };

  return (
    <div>
      <div className="wrapper">
        <MenuSummary count={count} />
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <ItemContainer
                updateCount={updateCount}
                addPreviewCard={addPreviewCard}
              />
            </div>
            <div className="col-8">
              <h2>Menu preview</h2>
              {previewCards.length > 0 &&
                previewCards.map((previewCard) => (
                  <PreviewCard
                    key={uuidv4()}
                    previewCard={previewCard}
                    removePreviewCard={removePreviewCard}
                    minusCount={minusCount}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
