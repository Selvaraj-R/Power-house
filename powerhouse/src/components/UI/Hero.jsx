import React from "react";
import gym from "../../assests/gym.png";
import "./styles/hero.css";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h2 className="section_title">
              Excercise is the key to a{" "}
              <span className="highlights">healthy </span>
              lifestyle
            </h2>
            <p>
              Welcome to POWER HOUSE, your one-stop destination for all things
              fitness. Our website is designed to provide you with the resources
              and tools you need to achieve your health and wellness goals,
              whether you're a seasoned athlete or just starting out on your
              fitness journey.
            </p>
            <div className="hero_btns">
              <button className="btn btn-primary">Get started</button>
              <button className="watch_btn">
                <span>
                  <i class="bx bx-play"></i>
                </span>
                  watch Video
              </button>
            </div>
          </div>
          <div className="hero_img">
            <div className="hero_img_wrapper">
              <div className="box-1">
                <div className="box-2">
                  <div className="box-3">
                    <div className="box_img">
                      <img src={gym} alt="girl photo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heart_rate">
                <h5>Heart rate</h5>
                <span>
                  <i class="ri-heart-pulse-line"></i>
                </span>
                <h5>200BPM</h5>
              </div>
              <div className="gym_location">
                <span>
                  {" "}
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>Find new <br />gym near you</h5>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
