import React from "react";
import "./style.css"; // Ensure this CSS file is in the same directory or update path

export const Compare = () => {
  const handleLaunchAI1 = () => {
    window.location.href = "http://localhost:8501"; // Link for Content Generation AI
  };

  const handleLaunchAI2 = () => {
    window.location.href = "http://localhost:8502"; // Link for Project Management AI
  };

  return (
    <div className="compare">
      <p className="make-smarter-choices">
        Make smarter choices by comparing <br />
        features, prices, and reviews—instantly.
      </p>

      {/* AI Model 1: Content Generation AI */}
      <div className="comp-box">
        <div className="text-wrapper-9">Content-Generation-AI</div>
        <div className="checkout-5">Select a product</div>

        {/* This entire div is now clickable */}
        <div className="overlap-group-3" onClick={handleLaunchAI1}>
          <div className="checkout-6">Some Specifications</div>
          <p className="checkout-7">
            Category: Content Generation
            <br />
            Price: $0.03/task • Free Demo Available
            <br />
            Rating: ⭐ 4.8 (320 reviews)
            <br />
            Provider: @CreatiBots
            <br />
            Description:
            <br />
            CopyCraft Pro is a fine-tuned GPT-based AI agent built for
            high-quality, SEO-optimized copywriting. Ideal for blogs, social
            media posts, email campaigns, and ad copy. It supports multiple
            tones and languages.
            <br />
            <br />
            <strong>Key Features:</strong>
            <br />
            • Custom tone adaptation (professional, casual, witty)
            <br />
            • Language translation & localization
            <br />
            • Keyword optimization & readability checks
            <br />
            • Sentiment-aware prompt handling
            <br />
            • Try Before You Buy: ✅ Demo up to 3 tasks/day
            <br />
            • Token Reputation Score: 🟢 92% positive feedback
            <br />
            • Ownership Status: 8/10 fractional shares available
          </p>
        </div>
      </div>

      {/* AI Model 2: Project Management AI */}
      <div className="comp-box-2">
        <div className="text-wrapper-9">Project-Management-AI</div>
        <div className="checkout-5">Select a product</div>

        {/* This entire div is now clickable */}
        <div className="overlap" onClick={handleLaunchAI2}>
          <div className="checkout-8">Some Specifications</div>
          <p className="checkout-7">
            Category: Project Management & Productivity
            <br />
            Price: $25/user/month • 14-day Free Trial
            <br />
            Rating: ⭐ 4.7 (210 reviews)
            <br />
            Provider: @TaskMasterAI
            <br />
            Description:
            <br />
            TaskMaster AI is an intelligent project management assistant
            designed to streamline workflows, automate task allocation, and
            provide predictive insights for project success. It helps teams
            plan, track, and deliver projects efficiently.
            <br />
            <br />
            <strong>Key Features:</strong>
            <br />
            • AI-powered task scheduling and prioritization
            <br />
            • Automated progress tracking and reporting
            <br />
            • Resource allocation and workload balancing
            <br />
            • Risk prediction and mitigation suggestions
            <br />
            • Intelligent meeting summarization & action item generation
            <br />
            • Integration with popular tools (Slack, Jira, Google Workspace)
            <br />
            • Try Before You Buy: ✅ Full-featured 14-day trial
            <br />
            • Token Reputation Score: 🟢 90% team adoption rate
            <br />
            • Ownership Status: Enterprise & Team plans available
          </p>
        </div>
      </div>
    </div>
  );
};

// If you are not using default export, you might export it like this:
// export default Compare;