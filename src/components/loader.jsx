import React from "react";

const Loader = () => {
  let matrix = [];
  for (let i = 1; i <= 25; i++) {
    matrix.push(<li key={i} className="loader" />);
  }
  return (
    <div id="loader">
      <ul type="none" id="matrix">
        {matrix}
      </ul>
    </div>
  );
};

export default React.memo(Loader);
