import React from "react";
const TabulationSearch = (props) => {
  return (
    <form>
      <input type="text" onChange={(e1) => props.handleChange(e1)} />
      <button type="button">Search</button>
    </form>
  );
};

export default React.memo(TabulationSearch);
