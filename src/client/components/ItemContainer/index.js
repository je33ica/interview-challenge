import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemContainer.css";
import ItemDetails from "../ItemDetails";
import SearchInput from "../SearchInput";

const ItemContainer = ({ updateCount, addPreviewCard }) => {
  const [items, setItems] = useState([]);
  const [dietary, setDietary] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        setItems(res.data.items);
        setDietary(res.data.dietary);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredItems = items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredItems);
      console.log("filtered items", filteredItems);
    } else {
      setFilteredResults(items);
      console.log("items",items)
    }
  };

  if (searchInput.length > 0) {
    return (
      <>
        <SearchInput searchItems={searchItems} />

        <div className="item-container">
          hello
          {filteredResults.length > 0 && (
            <ItemDetails
              items={items}
              updateCount={updateCount}
              addPreviewCard={addPreviewCard}
            ></ItemDetails>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <SearchInput searchItems={searchItems} />
        <div className="item-container">
          howdy
          {items.length > 0 && (
            <ItemDetails
              items={items}
              updateCount={updateCount}
              addPreviewCard={addPreviewCard}
            ></ItemDetails>
          )}
        </div>
      </>
    );
  }
};
export default ItemContainer;
