import React from "react";

const SearchBox = ({ onsearch }) => {
  return (
    <div className="search-container">
      <div className="search">
        <input type="checkbox" id="trigger" className="search__checkbox" />
        <label className="search__label-init" htmlFor="trigger"></label>
        <label className="search__label-active" htmlFor="trigger"></label>
        <div className="search__border"></div>
        <input
          type="text"
          className="search__input"
          onChange={(e) => {
            onsearch(parseFloat(e.target.value));
          }}
        />
        <div className="search__close"></div>
      </div>
    </div>
  );
};

export default React.memo(SearchBox);
