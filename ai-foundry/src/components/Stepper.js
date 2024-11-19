/* import React from "react";
import "./Stepper.css";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep === index ? "active" : ""}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Stepper; */

import React from "react";
import "./Stepper.css";

const Stepper = ({currentStep, card}) => {
  return (
    <div className="stepper-container">
      <div className="step-title">
        <p>{card} - {currentStep}</p>
      </div>
      <div className="stepper">
        <div className="step completed">1</div>
        <div className="step completed">2</div>
        <div className="step completed">3</div>
        <div className="step pending">4</div>
        <div className="step">5</div>
        <div className="step">6</div>
      </div>
    </div>
  );
};

export default Stepper;
