import React, { useState } from 'react';
import "../styled/Dialog.css"
import { dialogs } from '../utils/informations';
import scienctistImage from '../../images/physicist_face.png'; 

const DialogPopUp = ({ setShowPopUp, levelNumber }) => {
  const currentDialog = dialogs[levelNumber];
  const totalSteps = currentDialog.informations.length;
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setShowPopUp(false);
    // or navigate?
  };

  return (
    <div className="popup-dialog">
      <div className="popup-content-dialog">
        <h1>{currentDialog.title}</h1>
        <div className="dialog-content">
          <div className="scientist-photo">
            <img src={scienctistImage} alt="Scientist" />
          </div>
          <div className="information-text">
            <p>{currentDialog.informations[currentStep]}</p>
          </div>
        </div>
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <button type="button" onClick={handlePreviousStep}>Previous</button>
          )}
          {currentStep < totalSteps - 1 ? (
            <button type="button" onClick={handleNextStep}>Next</button>
          ) : (
            <button type="button" onClick={handleClose}>Close</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogPopUp;

