import React, { useEffect } from "react";
import './LinearProgressBar.css'
const ProgressBarWithEllipse = ({ progress }) => {
  useEffect(() => {
    const progressBar = document.querySelector(".progress-fill");
    const ellipseSvg = document.querySelector(".ellipse-svg");

    function setProgress(value) {
      const max = 100;
      const progressPercentage = (value / max) * 100;
      progressBar.style.width = `${progressPercentage}%`;
      ellipseSvg.style.left = `calc(${progressPercentage}% - 4px)`;
    }

    // Call the function with the specified progress value
    setProgress(progress);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      <svg
        className="ellipse-svg"
        width="8"
        height="7"
        viewBox="0 0 8 7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="3.80904" cy="3.60717" rx="3.23873" ry="3.24291" fill="#EAECEE" />
      </svg>
    </div>
  );
};

export default ProgressBarWithEllipse;
