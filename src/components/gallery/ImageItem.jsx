import React from 'react';

const ImageItem = ({ imageSource, imageId, handleImageClick }) => {
  const handleSelectImage = () => {
    handleImageClick(imageId);
  };

  return (
    <li className='h-[30vh] flex-grow' onClick={handleSelectImage}>
      <img
        src={imageSource}
        className='max-h-full min-w-full object-cover'
        alt={imageId}
      />
    </li>
  );
};

export default ImageItem;
