import React from 'react';
import "./BackButton.css"
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  return (
    <button className="back-button" onClick={handleGoBack}>
    <span className="arrow-icon">&larr;</span> {/* Left-facing arrow HTML entity */}
  </button>
  );
};

export default BackButton;
