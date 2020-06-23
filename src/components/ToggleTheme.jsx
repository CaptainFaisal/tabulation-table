import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faSun, faBars);
const ToggleTheme = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <FontAwesomeIcon icon="moon" />
        <FontAwesomeIcon icon="sun" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default React.memo(ToggleTheme);
