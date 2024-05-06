import { useState } from 'react';
import { IMAGES_GALLERY_DATA } from '../../constant';
import ImageItem from './ImageItem';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(2); // null

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  const handleDismiss = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ul className='flex gap-2 flex-wrap after:content-[""] after:flex-grow-[10]'>
        {IMAGES_GALLERY_DATA.map((item) => (
          <ImageItem
            key={item.id}
            imageSource={item.src}
            imageId={item.id}
            handleImageClick={handleImageClick}
          />
        ))}
      </ul>

      {selectedImage && (
        <div
          className='dismiss fixed inset-0 w-full h-full bg-[#000000d9] flex items-center justify-center'
          onClick={handleDismiss}
        >
          <img
            src={
              IMAGES_GALLERY_DATA.find((item) => item.id === selectedImage).src
            }
            alt='test'
            className='max-h-[80%] max-w-[60%] mx-auto'
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
