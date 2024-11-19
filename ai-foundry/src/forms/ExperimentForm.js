// components/ExperimentForm.js
import React, { useState } from "react";
import Stepper from "../components/Stepper";
import "./ExperimentForm.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

const ExperimentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];

  const steps = ["DETAILS", "DATA", "CONFIGURATION", "REVIEW"];

  const nextStep = () => {

    if (currentStep < steps.length - 1) {
      console.log(currentStep);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    console.log(currentStep);
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="experiment-form">
      <div className="experiment-form-header row">
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

      <div className="row">
        {steps.map((step) => {
          return (
            <div className="col-sm-3" key={step}>
              {" "}
              <Stepper currentStep={step} />
            </div>
          );
        })}
      </div>

      <form>
        {/* Step 1: Details */}
        {currentStep === 0 && (
          <div className="content-container">
            <p>Name & Classification</p>

            <div className="step-content">
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="name">Name of Experiment</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter experiment name"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="name">CLASSIFICATION</label>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Internal
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="bdomain">BUSINESS DOMAIN</label>
                  <Select
                    name="bdomain"
                    id="bdomain"
                    aria-label="domain dropdown"
                    options={options}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="vchain">VALUE CHAIN</label>

                  <Select
                    name="vchain"
                    id="vchain"
                    aria-label="value chain dropdown"
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div className="step-content">
              <p>Description & Details</p>
              <div className="row">
                <label htmlFor="desc">DESCRIPTION</label>
                <textarea
                  name="desc"
                  type="text"
                  rows={5}
                  cols={32}
                  id="desc"
                  placeholder="Description ...."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Data */}
        {currentStep === 1 && <div>Data Section</div>}

        {/* Step 3: Configuration */}
        {currentStep === 2 && <div>Configuration Section</div>}

        {/* Step 4: Review */}
        {currentStep === 3 && <div>Review Section</div>}

        {/* Navigation buttons */}
        <div className="navigation-buttons">
          <button
          className="btn"
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
          className="btn"
            type="button"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperimentForm;
