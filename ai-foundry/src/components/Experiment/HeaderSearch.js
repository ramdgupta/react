import React from 'react';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderSearch = (row, col) => {
    return(
        <div className={`experiment-form-header`}>
<div className="btemplate-name col-sm-8">
  <h6>CREATE NEW EXPERIMENT</h6>
  <label htmlFor="businessTemplate">Business Solution Template</label>
  <input
    type="text"
    id="businessTemplate"
    name="businessTemplate"
    defaultValue={"Supply_Chain_01-2024"}
  />
  <FontAwesomeIcon icon={faCircleXmark} role="button" />
</div>
<div className="btemplate-btn col-sm-4">
  <button className="btn">SAVE</button>
  <button className="btn">CANCEL</button>
  <button className="btn" style={{ fontWeight: "normal" }}>
    LAUNCH EXPERIMENT
  </button>
</div>
</div>
    )
}

export default HeaderSearch;