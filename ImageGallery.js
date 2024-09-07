import React from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      <h2>Medical Images</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image._id} className="image-card">
            <img src={image.imageUrl} alt={image.label} className="image" />
            <p className="image-label">{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;