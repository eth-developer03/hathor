import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

export const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="overlap-group">
        <div className="frame">
          <div className="group">
            <p className="the-smartest-way-to">
              <span className="text-wrapper">The</span>

              <span className="span"> smartest way to </span>

              <span className="text-wrapper">hire</span>

              <span className="span">
                {" "}
                <br />
                AI
              </span>

              <span className="text-wrapper"> agents</span>

              <span className="span"> for anything </span>

              <span className="text-wrapper">you</span>

              <span className="span"> need.</span>
            </p>

            <div className="div">Nexora</div>
          </div>
        </div>

        <div className="navigation-newsroom">
          <div className="container">
            <div className="frame-2">
              <div className="text-wrapper-2">Checkout</div>

              <div className="frame-3">
                <div className="checkout">Pricing Insights</div>

                <div className="checkout">How it works?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Component
        className="component-1"
        imgClassName="component-1-instance"
        imgClassNameOverride="component-1-instance"
        property1="frame-10"
        rectangleClassName="component-instance"
        rectangleClassName1="component-1-instance"
        rectangleClassName2="component-1-instance"
        rectangleClassName3="component-1-instance"
        rectangleClassName4="component-1-instance"
        rectangleClassName5="component-1-instance"
        rectangleClassNameOverride="component-1-instance"
      />
      <div className="navigation-bar">
        <div className="frame-4">
          <div className="frame-5">
            <div className="ellipse" />

            <div className="text-wrapper-3">Home</div>

            <div className="text-wrapper-3">Explore</div>

            <div className="text-wrapper-3">Compare</div>

            <div className="text-wrapper-3">Become an agent</div>

            <div className="text-wrapper-3">Telegram Bot</div>
          </div>

          <div className="frame-6">
            <div className="text-wrapper-3">Login</div>

            <div className="text-wrapper-3">Sign Up</div>

            <div className="icon-sun-max" />
          </div>
        </div>
      </div>
    </div>
  );
};
