import React, { useState } from "react";
import Stepper from "../components/Stepper";
import "./ExperimentForm.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

const CloneExperimentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCard, setCurrentCard] = useState("LAUNCH");

  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];

  const cards = ["LAUNCH", "EXECUTION", "FINALIZATION", "SHARE"];
  const steps = {
    LAUNCH: ["Name & Classification", "Descriptions", "Details", "Configuration", "Preview"],
    EXECUTION: ["Step 1", "Step 2", "Step 3", "Step 4"],
    FINALIZATION: ["Step 1", "Step 2", "Step 3"],
    SHARE: ["Step 1", "Step 2"]
  };

  const nextStep = () => {
    if (currentStep < steps[currentCard].length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleCardClick = (card) => {
    setCurrentCard(card);
    setCurrentStep(0);
  };

  return (
    <div className="experiment-form">
      <form>
        <div className="header">
          <h2>CREATE NEW EXPERIMENT</h2>
          <p>Business Solution Template</p>
        </div>
        <div className="actions">
          <button type="button">SAVE</button>
          <button type="button">CANCEL</button>
          <button type="button">LAUNCH EXPERIMENT</button>
        </div>
        <Stepper steps={steps[currentCard]} currentStep={currentStep} />
        <div className="cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${currentCard === card ? "active" : ""}`}
              onClick={() => handleCardClick(card)}
            >
              {card}
              <div className="step-count">
                {steps[card].map((_, stepIndex) => (
                  <span key={stepIndex} className={`circle ${currentStep >= stepIndex ? "completed" : ""}`}>
                    {stepIndex + 1}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="step-content">
          {currentCard === "LAUNCH" && currentStep === 0 && (
            <div>
              <h3>Name & Classification</h3>
              <div className="form-group">
                <label htmlFor="experimentName">Name of Experiment</label>
                <input type="text" id="experimentName" placeholder="Enter experiment name" />
              </div>
              <div className="form-group">
                <label htmlFor="classification">CLASSIFICATION</label>
                <Select name="classification" id="classification" options={options} />
              </div>
              <div className="form-group">
                <label htmlFor="businessDomain">BUSINESS DOMAIN</label>
                <Select name="businessDomain" id="businessDomain" options={options} />
              </div>
              <div className="form-group">
                <label htmlFor="valueChain">VALUE CHAIN</label>
                <Select name="valueChain" id="valueChain" options={options} />
              </div>
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 1 && (
            <div>
              <h3>Description & Details</h3>
              <div className="form-group">
                <label htmlFor="description">DESCRIPTION</label>
                <textarea id="description" rows={5} placeholder="Enter description"></textarea>
              </div>
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 2 && (
            <div>
              <h3>Technical & Details</h3>
              <div className="form-group">
                <label htmlFor="technicalDetails">Technical Details</label>
                <textarea id="technicalDetails" rows={5} placeholder="Enter technical details"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="tags">TAGS</label>
                <Select name="tags" id="tags" options={options} />
              </div>
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 3 && (
            <div>
              <h3>Configuration</h3>
              <div className="form-group">
                <label htmlFor="configName">Configuration Name</label>
                <input type="text" id="configName" placeholder="Enter configuration name" />
              </div>
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 4 && (
            <div>
              <h3>Preview</h3>
              <p>Preview your experiment details here.</p>
            </div>
          )}
          {/* Add similar blocks for EXECUTION, FINALIZATION, and SHARE steps */}
        </div>
        <div className="navigation-buttons">
          <button type="button" onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </button>
          <button type="button" onClick={nextStep} disabled={currentStep === steps[currentCard].length - 1}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CloneExperimentForm;
