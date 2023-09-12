import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBarComponent() {
  const percentage = 85;
  const points = 60;

  // Customize the styles for the CircularProgressbar
  const progressBarStyles = buildStyles({
    pathColor: "#42d38b", // Green color for the progress
    trailColor: "#f0f0f0", // Light gray color for the background
    textColor: "#070707", // Dark color for the percentage and points text
    textSize: "16px",
    trailWidth: 3, // Adjust this value to make the bar thinner or thicker
  });

  return (
    <div style={{ marginLeft: "50px"  ,width:'130px',height:'130px' ,position:'relative',bottom:'125px',left:'110px'}}>
      <div style={{ width: "120px" ,marginLeft:'4%' ,top:'4px',position:'relative'}}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={progressBarStyles}
        />
      </div>
      <div style={{ textAlign: "center",position:'relative',bottom:'50px' }}>
        <span style={{ color: '#42d38b', fontFamily: 'Manrope;',fontSize:'11px'}}>{points} Points</span>
      </div>
    </div>
  );
}

export default ProgressBarComponent;
