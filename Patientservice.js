import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your backend URL

export const fetchAllPatientHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/patienthistory`);
    return response.data; // Should be an array of patient history objects
  } catch (error) {
    console.error('Error fetching patient history:', error);
    return [];
  }
};
