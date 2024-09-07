import React, { useEffect, useState } from 'react';
import '../styles/PatientHistory.css'; // Create this CSS file

const Patienthistory = () => {
  const [history, setHistory] = useState([]);

  const fetchPatienthistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/patient-history/D001'); // Replace D001 with dynamic doctor ID
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching patient history:', error);
    }
  };

  useEffect(() => {
    fetchPatienthistory();
  }, []);

  return (
    <div>
      <h1>Patient History</h1>
      <div className="patient-history-list">
        {history.map((entry) => (
          <div key={entry._id} className="history-entry">
            <p>Date: {new Date(entry.visitDate).toLocaleDateString()}</p>
            <p>Symptoms: {entry.symptoms}</p>
            <p>Treatment: {entry.treatment}</p>
            {entry.notes && <p>Notes: {entry.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patienthistory;