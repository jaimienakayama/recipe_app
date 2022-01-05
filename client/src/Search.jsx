import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className="search-bar">
      <input
        placeholder="search by ingredient or name of dish"
        type="text"
        onChange={(e) => onChange(e)}
        required
      />
    </div>
  );
};

export default Search;
