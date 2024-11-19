import React, { useState, useEffect } from "react";
import Stepper from "../components/Experiment/Stepper";
import HeaderSearch from "../components/Experiment/HeaderSearch";
import "./ExperimentForm.css";
import Select from "react-select";

const CloneExperimentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCard, setCurrentCard] = useState("LAUNCH");
  const [formData, setFormData] = useState({
    LAUNCH: ["", "", "", "", ""],
    EXECUTION: ["", "", "", ""],
    FINALIZATION: ["", "", ""],
    SHARE: ["", ""]
  });
  const [stepStatus, setStepStatus] = useState({
    LAUNCH: ["gray", "gray", "gray", "gray", "gray"],
    EXECUTION: ["gray", "gray", "gray", "gray"],
    FINALIZATION: ["gray", "gray", "gray"],
    SHARE: ["gray", "gray"]
  });

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
  const stepFields = {
    LAUNCH: [
      [0, 1, 2, 3], // Step 1 fields
      [1],          // Step 2 fields
      [2, 3],       // Step 3 fields
      [3],          // Step 4 fields
      []            // Step 5 fields (Preview)
    ],
    EXECUTION: [
      [0], [1], [2], [3]
    ],
    FINALIZATION: [
      [0], [1], [2]
    ],
    SHARE: [
      [0], [1]
    ]
  };
  useEffect(() => {
    const newStepStatus = { ...stepStatus };
    const currentStepFields = stepFields[currentCard][currentStep];
    const allFieldsFilled = currentStepFields.every(index => formData[currentCard][index].trim() !== "");
    const someFieldsFilled = currentStepFields.some(index => formData[currentCard][index].trim() !== "");
  
    if (allFieldsFilled) {
      newStepStatus[currentCard][currentStep] = "complete";
    } else if (someFieldsFilled) {
      newStepStatus[currentCard][currentStep] = "pending";
    } else {
      newStepStatus[currentCard][currentStep] = "gray";
    }
  
    setStepStatus(newStepStatus);
  }, [formData, currentCard, currentStep]);
  
  const handleInputChange = (card, index, value) => {
    const newFormData = { ...formData };
    newFormData[card][index] = value;
    setFormData(newFormData);
  
    const newStepStatus = { ...stepStatus };
    const currentStepFields = stepFields[card][currentStep];
    const allFieldsFilled = currentStepFields.every(index => newFormData[card][index].trim() !== "");
    const someFieldsFilled = currentStepFields.some(index => newFormData[card][index].trim() !== "");
  
    if (allFieldsFilled) {
      newStepStatus[card][currentStep] = "complete";
    } else if (someFieldsFilled) {
      newStepStatus[card][currentStep] = "pending";
    } else {
      newStepStatus[card][currentStep] = "gray";
    }
  
    setStepStatus(newStepStatus);
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

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };
  
  
  return (
    <div className="experiment-form">
     <HeaderSearch/>
      <form>
        <Stepper
          currentStep={currentStep}
          cards={cards}
          handleCardClick={handleCardClick}
          steps={steps}
          currentCard={currentCard}
          handleStepClick={handleStepClick}
          stepStatus={stepStatus}
        />
        <div className="form-content">
          {currentCard === "LAUNCH" && currentStep === 0 && (
            <div>
              <label>Name of Experiment</label>
              <input
                type="text"
                value={formData.LAUNCH[0]}
                onChange={(e) => handleInputChange("LAUNCH", 0, e.target.value)}
              />
              <label>CLASSIFICATION</label>
              <input
                type="text"
                value={formData.LAUNCH[1]}
                onChange={(e) => handleInputChange("LAUNCH", 1, e.target.value)}
              />
              <label>BUSINESS DOMAIN</label>
              <input
                type="text"
                value={formData.LAUNCH[2]}
                onChange={(e) => handleInputChange("LAUNCH", 2, e.target.value)}
              />
              <label>VALUE CHAIN</label>
              <Select
                options={options}
                value={options.find(option => option.value === formData.LAUNCH[3])}
                onChange={(option) => handleInputChange("LAUNCH", 3, option.value)}
              />
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 1 && (
            <div>
              <label>Description & Details</label>
              <textarea
                value={formData.LAUNCH[1]}
                onChange={(e) => handleInputChange("LAUNCH", 1, e.target.value)}
              />
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 2 && (
            <div>
              <label>Technical & Details</label>
              <textarea
                placeholder="Technical details"
                value={formData.LAUNCH[2]}
                onChange={(e) => handleInputChange("LAUNCH", 2, e.target.value)}
              />
              <label>TAGS</label>
              <Select
                options={options}
                value={options.find(option => option.value === formData.LAUNCH[3])}
                onChange={(option) => handleInputChange("LAUNCH", 3, option.value)}
              />
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 3 && (
            <div>
              <label>Configuration</label>
              <input
                type="text"
                placeholder="Enter configuration details"
                value={formData.LAUNCH[3]}
                onChange={(e) => handleInputChange("LAUNCH", 3, e.target.value)}
              />
            </div>
          )}
          {currentCard === "LAUNCH" && currentStep === 4 && (
          <div>
            <label>Preview</label>
            <p><strong>Name of Experiment:</strong> {formData.LAUNCH[0]}</p>
            <p><strong>Classification:</strong> {formData.LAUNCH[1]}</p>
            <p><strong>Business Domain:</strong> {formData.LAUNCH[2]}</p>
            <p><strong>Value Chain:</strong> {formData.LAUNCH[3]}</p>
            <p><strong>Description & Details:</strong> {formData.LAUNCH[1]}</p>
            <p><strong>Technical & Details:</strong> {formData.LAUNCH[2]}</p>
            <p><strong>Tags:</strong> {formData.LAUNCH[3]}</p>
            <p><strong>Configuration:</strong> {formData.LAUNCH[3]}</p>
          </div>
        )}

          {currentCard === "EXECUTION" && currentStep === 0 && (
            <div>
              <label>Execution Step 1</label>
              <input
                type="text"
                placeholder="Execution step 1 details"
                value={formData.EXECUTION[0]}
                onChange={(e) => handleInputChange("EXECUTION", 0, e.target.value)}
              />
            </div>
          )}
          {currentCard === "EXECUTION" && currentStep === 1 && (
            <div>
              <label>Execution Step 2</label>
              <input
                type="text"
                placeholder="Execution step 2 details"
                value={formData.EXECUTION[1]}
                onChange={(e) => handleInputChange("EXECUTION", 1, e.target.value)}
              />
            </div>
          )}
          {currentCard === "EXECUTION" && currentStep === 2 && (
            <div>
              <label>Execution Step 3</label>
              <input
                type="text"
                placeholder="Execution step 3 details"
                value={formData.EXECUTION[2]}
                onChange={(e) => handleInputChange("EXECUTION", 2, e.target.value)}
              />
            </div>
          )}
          {currentCard === "EXECUTION" && currentStep === 3 && (
            <div>
              <label>Execution Step 4</label>
              <input
                type="text"
                placeholder="Execution step 4 details"
                value={formData.EXECUTION[3]}
                onChange={(e) => handleInputChange("EXECUTION", 3, e.target.value)}
              />
            </div>
          )}
          {currentCard === "FINALIZATION" && currentStep === 0 && (
            <div>
              <label>Finalization Step 1</label>
              <input
                type="text"
                placeholder="Finalization step 1 details"
                value={formData.FINALIZATION[0]}
                onChange={(e) => handleInputChange("FINALIZATION", 0, e.target.value)}
              />
            </div>
          )}
          {currentCard === "FINALIZATION" && currentStep === 1 && (
            <div>
              <label>Finalization Step 2</label>
              <input
                type="text"
                placeholder="Finalization step 2 details"
                value={formData.FINALIZATION[1]}
                onChange={(e) => handleInputChange("FINALIZATION", 1, e.target.value)}
              />
            </div>
          )}
          {currentCard === "FINALIZATION" && currentStep === 2 && (
            <div>
              <label>Finalization Step 3</label>
              <input
                type="text"
                placeholder="Finalization step 3 details"
                value={formData.FINALIZATION[2]}
                onChange={(e) => handleInputChange("FINALIZATION", 2, e.target.value)}
              />
            </div>
          )}
          {currentCard === "SHARE" && currentStep === 0 && (
            <div>
              <label>Share Step 1</label>
              <input
                type="text"
                placeholder="Share step 1 details"
                value={formData.SHARE[0]}
                onChange={(e) => handleInputChange("SHARE", 0, e.target.value)}
              />
            </div>
          )}
          {currentCard === "SHARE" && currentStep === 1 && (
            <div>
              <label>Share Step 2</label>
              <input
                type="text"
                placeholder="Share step 2 details"
                value={formData.SHARE[1]}
                onChange={(e) => handleInputChange("SHARE", 1, e.target.value)}
              />
            </div>
          )}
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


