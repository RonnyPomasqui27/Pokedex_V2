import React from 'react';

const BackgroundPoke = () => {
  return (
    <div className='backPoke'>
      <div className="first_elements">
        <div className="triangle"></div>
        <div className="bar"></div>
      </div>
      <div className="figure">
        <div className="firts_line"></div>
        <div className="second_line"></div>
        <div className="third_line"></div>
      </div>
      <div className="second_elements">
        <div className="circle_container">
          <div className="first_boll"></div>
          <div className="second_boll">
            <div className="circle"></div>
          </div>
        </div>
        <div className="control_light">
          <div className="ball">
            <div className="centro"></div>
          </div>
          <div className="ball yellow">
            <div className="centro"></div>
          </div>
          <div className="ball green">
            <div className="centro"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BackgroundPoke;