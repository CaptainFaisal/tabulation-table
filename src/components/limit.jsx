import React from "react";
const PageLimit = ({ onLimit, students }) => {
  return (
    <select onChange={(e) => onLimit(e.target.value)}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value={students.length}>Full</option>
    </select>
  );
};

export default React.memo(PageLimit);
