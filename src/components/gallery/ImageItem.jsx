import React from 'react';

const ImageItem = ({ image, index, handleImageClick }) => {
  const handleClick = () => {
    handleImageClick(image, index);
  };

  return (
    <li className='h-[30vh] flex-grow' onClick={handleClick}>
      <img
        src={image.src}
        className='max-h-full min-w-full object-cover'
        alt={image.id}
      />
    </li>
  );
};

export default ImageItem;
