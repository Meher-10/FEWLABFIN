import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the lightbox styles

function ImageGallery() {
  const images = [
    'https://picsum.photos/id/1018/1000/600/',
    'https://picsum.photos/id/1015/1000/600/',
    'https://picsum.photos/id/1019/1000/600/',
    'https://picsum.photos/id/1020/1000/600/',
    'https://picsum.photos/id/1021/1000/600/'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          onClick={() => openLightbox(index)}
          alt={`Gallery ${index}`}
          style={{ width: '200px', height: '150px', cursor: 'pointer', objectFit: 'cover' }}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default ImageGallery;
