import * as React from "react";
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; 
import BackButton from "./BackButton";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        <button className="home-link" onClick={handleGoHome}>
          Go back to Signin
        </button>
        <BackButton />
      </div>
    </div>
  );
};

export default NotFound;
