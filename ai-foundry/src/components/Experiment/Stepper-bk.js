import React from "react";

const Stepper = ({ currentStep, cards, handleCardClick, steps, currentCard, handleStepClick, stepStatus }) => {
  return (
    <div className="stepper-container">
      <div className="stepper">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card)}
            className={`card ${card === currentCard ? "active" : ""}`}
          >
            <h3>{card}</h3>
            <div className="steps">
              {steps[card].map((_, stepIndex) => (
                <div
                  key={stepIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (card !== currentCard) {
                        handleCardClick(card);
                    }
                    handleStepClick(stepIndex);
                  }}
                  className={`step ${card === currentCard && stepIndex === currentStep ? "active" : ""} ${stepStatus[card][stepIndex]}`}
                >
                  {stepIndex + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="step-text-menu">
        {steps[currentCard].map((step, stepIndex) => (
          <div
            key={stepIndex}
            onClick={() => handleStepClick(stepIndex)}
            className={`step-text ${stepIndex === currentStep ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
