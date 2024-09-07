import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with actual backend URL

export const fetchImages = async () => {
    try {
      const response = await axios.get(`${API_URL}/images`);
      console.log('Fetched Images:', response.data); // Log the fetched images
      return response.data; // Should be an array of image objects { url: '', label: '' }
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  };