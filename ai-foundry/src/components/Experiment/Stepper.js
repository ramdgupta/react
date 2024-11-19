import React from "react";

const Stepper = ({currentStep, cards, handleCardClick, steps, currentCard, handleStepClick, stepStatus  }) => {
  return (
    <div className="steper-section">
      <div className="row">
          
        {cards.map((card, index) => (
              <div className="col-md-3">
                <div
            key={index}
            onClick={() => handleCardClick(card)}
            className={`stepper-container ${card === currentCard ? "active" : ""}`}
          >
            <div className="step-title"><p>{card}</p></div>
            <div className="stepper">
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
                  className={`step ${card === currentCard && stepIndex === currentStep ? "active" : ""} ${stepStatus[card] ? stepStatus[card][stepIndex] : ""}`}>
                  {stepIndex + 1}
                </div>
              ))}
            </div>
          </div>
          
          </div>
        ))}
      </div>
      <div className="row">
          <div className="col-md-12">
          <div className="step-nav">
        {steps[currentCard]?.map((step, stepIndex) => (
          <div
            key={stepIndex}
            onClick={() => handleStepClick(stepIndex)}
            className={`step-nav-item ${stepIndex === currentStep ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
          </div>
      </div>
    </div>
  );
};

export default Stepper;
