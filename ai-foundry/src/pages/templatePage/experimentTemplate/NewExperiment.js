import React, { useState } from "react";
import Select from "react-select";
import "./NewExperiment.css";
import SearchableDropdown from "../../components/SearchableDropdown";

const options = [
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  { value: "knowledge-bank-qa", label: "Knowledge Bank Q&A Chatbot" },
  // Add more options as needed
];

const NewExperiment = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <div className="new-experiment-container">
        <h6>CREATE NEW EXPERIMENT</h6>
      </div>
      <div className="row">
        <div className="col-sm-4">
         {/*  <div className="dropdown-container">
            <label htmlFor="experiment-type">EXPERIMENT TYPE</label>
            <Select
              id="experiment-type"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="SELECT EXPERIMENT TYPE"
              isSearchable={true}
            />
          </div> */}
          <label htmlFor="experiment-type">EXPERIMENT TYPE</label>
          <SearchableDropdown />
        </div>
        <div className="col-sm-6" style={{marginTop:"26px"}}>
          <div className="steps">
            <div className="step">DETAILS</div>
            <div className="step">DATA</div>
            <div className="step">CONFIGURATIONS</div>
            <div className="step">REVIEW</div>
          </div>
        </div>
        <div className="col-sm-2"></div>

        <div className="message">
          Please select an experiment type to start creating.
        </div>
      </div>
    </>
  );
};

export default NewExperiment;
