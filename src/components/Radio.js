import React from "react";

const Radio = () => {
  return (
    <>
      <div className="radio">
        <div className="text-radio">
          <i className="fas fa-broadcast-tower"></i>
          <span className="title-radio">Radio Online</span>
        </div>
        <div className="player" id="player"></div>
      </div>
      
    </>
  );
};

export default Radio;
