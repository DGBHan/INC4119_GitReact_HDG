import React from "react";

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["AC"],
  ];

  const buttonStyle = {
    fontSize: "24px",       
    padding: "15px 25px",    
    margin: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((btn) => (
            <button
              key={btn}
              onClick={() => onButtonClick(btn)}
              style={buttonStyle} 
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
