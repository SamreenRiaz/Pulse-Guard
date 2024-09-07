import React from 'react';
import '../styles/DoctorDashboard.css';

const DoctorDashboard = ({ onGetImages, onGetPatientHistory }) => {
  return (
    <div className="doctor-dashboard">
      <h1>Doctor's Dashboard</h1>
      <p className="description">.........................</p>
      <button className="get-images-button" onClick={onGetImages}>
        Get Images
      </button>
      <button className="get-history-button" onClick={onGetPatientHistory}>
        View Patient History
      </button>
    </div>
  );
};

export default DoctorDashboard;
