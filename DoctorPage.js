import React, { useState } from 'react';
import DoctorDashboard from '../components/DoctorDashboard';
import ImageGallery from '../components/ImageGallery';
import { fetchImages } from '../components/imageService'; 
import { fetchAllPatientHistory } from '../components/Patientservice'; 

const DoctorPage = () => {
  const [images, setImages] = useState([]);
  const [patientHistory, setPatientHistory] = useState([]); 
  
  // Function to fetch images
  const handleGetImages = async () => {
    const fetchedImages = await fetchImages();
    setImages(fetchedImages);
  };

  const handleGetPatientHistory = async () => {
    const fetchedHistory = await fetchAllPatientHistory();
    setPatientHistory(fetchedHistory); 
  };

  return (
    <div>
      <DoctorDashboard 
        onGetImages={handleGetImages} 
        onGetPatientHistory={handleGetPatientHistory} 
      />
      {images.length > 0 && <ImageGallery images={images} />}

      {/* Conditionally display patient history when it exists */}
      {patientHistory.length > 0 && (
        <div>
          <h2>Patient History</h2>
          {patientHistory.map((patient, index) => (
            <div key={index}>
              <p><strong>Patient ID:</strong> {patient.patientId}</p>
              <p><strong>Doctor ID:</strong> {patient.doctorId}</p>
              <p><strong>Visit Date:</strong> {new Date(patient.visitDate).toLocaleDateString()}</p>
              <p><strong>Symptoms:</strong> {patient.symptoms}</p>
              <p><strong>Treatment:</strong> {patient.treatment}</p>
              {patient.notes && <p><strong>Notes:</strong> {patient.notes}</p>} {/* Only show if notes exist */}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorPage;
