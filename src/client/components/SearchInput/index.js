import React from "react";
import "./SearchInput.css"

const SearchInput = ({searchItems}) => {

    return (
        <>
         <div className="filters">
            <input className="form-control" placeholder="Name"
            onChange={(e) => searchItems(e.target.value)} />
          </div>
        </>
    )
}

export default SearchInput;