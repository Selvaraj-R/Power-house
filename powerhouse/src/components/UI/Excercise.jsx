import React from "react";
import lunges from "../../assests/lunges.png";
import yogaPose from "../../assests/yoga-pose.png";
import extended from "../../assests/extended.png";

import "./styles/excercise.css";
const Excercise = () => {
  return (
    <section>
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Improved fitness, mental well-being, disease prevention, energy
            boost, better sleep, productivity, cognitive function for a
            healthier life.
          </p>
        </div>

        {/* exercise list  */}
        <div className="exercise_wrapper">
          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={lunges} alt="lunges" />
            </span>
            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>
                A regular exercise regimen is key to living a healthy and
                fulfilling life.
              </p>
            </div>
            {/* <img src={yogaPose} alt="lunges" /> */}
            {/* <img src={extended} alt="lunges" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excercise;
