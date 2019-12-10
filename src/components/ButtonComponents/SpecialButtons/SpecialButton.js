import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="calc">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}
    </div>
  );
};

export default SpecialButton