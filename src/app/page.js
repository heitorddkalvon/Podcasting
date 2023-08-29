import React from "react";
import Image from 'next/image';
import "../../src/app/globals.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="balls">
            <div className="overlap-group">
              <img className="ellipse" alt="Ellipse" src="ellipse-3-2.svg" />
              <div className="div" />
              <div className="ellipse-2" />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <img className="img" alt="Ellipse" src="ellipse-3.svg" />
              <div className="ellipse-3" />
              <div className="ellipse-4" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-3">
              <img className="ellipse-5" alt="Ellipse" src="image.svg" />
              <div className="ellipse-6" />
              <div className="ellipse-7" />
            </div>
          </div>
          <div className="text">
            <div className="overlap-4">
              <div className="text-wrapper">Think and Cast</div>
              <p className="p">Find a Podcast just for you</p>
            </div>
          </div>
          <button className="button">
            <div className="overlap-5">
              <div className="text-wrapper-2">Join Now</div>
            </div>
          </button>
          <img className="landing-page-girl" alt="Landing page girl" src="landing-page-girl-1.png" />
          <div className="nav">
            <div className="nav-buttuns">
              <div className="text-wrapper-3">About us</div>
              <div className="overlap-group-2">
                <div className="text-wrapper-4">Contact</div>
                <div className="text-wrapper-5">Facebook</div>
              </div>
              <div className="text-wrapper-6">Twitter</div>
            </div>
            <img className="logo" alt="Logo" src="logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
