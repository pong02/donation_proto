import React from "react";
import "./customDialog.css";

function CustomDialog({ show, title, desc1, desc2, confirm }) {
  if (!show) {
    return <></>;
  }

  return (
    <div className="overlay">
      <div className="dialog__content">
        <h4 className="dialog__title">{title}</h4>
        <p className="dialog__description">{desc1}</p>
        <p className="dialog__description">{desc2}</p>
        <div className="dialog__footer">
          <button className="dialog_confirm" onClick={confirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomDialog;
