import React from "react";
import "./style.css";

export const Compare = () => {
  return (
    <div className="compare">
      <p className="make-smarter-choices">
        Make smarter choices by comparing <br />
        features, prices, and reviews—instantly.
      </p>

      <div className="comp-box">
        <div className="text-wrapper-9">AI Model 1</div>

        <div className="checkout-5">Select a product</div>

        <div className="overlap-group-3">
          <div className="checkout-6">Some Specifications</div>

          <p className="checkout-7">
            <br />
            Category: Content Generation
            <br />
            Price: $0.03/task • Free Demo Available
            <br />
            Rating: ⭐ 4.8 (320 reviews)
            <br />
            Provider: @CreatiBots
            <br />
            Description:
            <br /> CopyCraft Pro is a fine-tuned GPT-based AI agent built for
            high-quality, SEO-optimized copywriting. Ideal for blogs, social
            media posts, email campaigns, and ad copy. It supports multiple
            tones and languages.
            <br />
            Key Features:
            <br />
            Custom tone adaptation (professional, casual, witty)
            <br />
            Language translation &amp; localization
            <br />
            Keyword optimization &amp; readability checks
            <br />
            Sentiment-aware prompt handling
            <br />
            Try Before You Buy: ✅ Demo up to 3 tasks per day
            <br />
            Token Reputation Score: 🟢 92% positive feedback
            <br />
            Ownership Status: 8/10 fractional shares available for resale
          </p>
        </div>
      </div>

      <div className="comp-box-2">
        <div className="text-wrapper-9">AI Model 2</div>

        <div className="checkout-5">Select a product</div>

        <div className="overlap">
          <div className="checkout-8">Some Specifications</div>

          <p className="checkout-7">
            <br />
            Category: Business &amp; Startup Tools
            <br />
            Price: $0.07/task • Free Demo Available
            <br />
            Rating: ⭐ 4.9 (185 reviews)
            <br />
            Provider: @StartUpWiz
            <br />
            Description:
            <br /> PitchBot 3000 is an AI powerhouse designed to generate pitch
            decks and elevator pitches tailored for startup fundraising. It
            analyzes your business concept and crafts VC-friendly presentations,
            market insights, and even anticipates investor questions.
            <br />
            Key Features:
            <br />
            Dynamic 10-slide pitch deck creation
            <br />
            Market size and competitor benchmarking
            <br />
            Elevator pitch generator with storytelling flair
            <br />
            Investor Q&amp;A prediction module
            <br />
            Style-matching for YC, Sequoia, or angel rounds
            <br />
            Try Before You Buy: ✅ Demo 1 pitch deck per week
            <br />
            Token Reputation Score: 🟢 95% founder approval
            <br />
            Ownership Status: 5/10 fractional shares available
          </p>
        </div>
      </div>
    </div>
  );
};
