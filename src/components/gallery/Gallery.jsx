import { useState } from 'react';
import { IMAGES_GALLERY_DATA } from '../../constant';
import ImageItem from './ImageItem';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // null
  const [currentIndex, setCurrentIndex] = useState(null); // null

  const handleImageClick = (item, index) => {
    setSelectedImage(item.src);
    setCurrentIndex(index);
  };

  const handleDismiss = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setSelectedImage(null);
    }
  };

  const handleNext = () => {
    const length = IMAGES_GALLERY_DATA.length;
    if (currentIndex + 1 >= length) {
      setCurrentIndex(0);
      const newUrl = IMAGES_GALLERY_DATA[0].src;
      setSelectedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = IMAGES_GALLERY_DATA[newIndex].src;
    setSelectedImage(newUrl);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const length = IMAGES_GALLERY_DATA.length;
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
      const newUrl = IMAGES_GALLERY_DATA[length - 1].src;
      setSelectedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = IMAGES_GALLERY_DATA[newIndex].src;
    setSelectedImage(newUrl);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <ul className='flex gap-2 flex-wrap after:content-[""] after:flex-grow-[10]'>
        {IMAGES_GALLERY_DATA.map((item, index) => (
          <ImageItem
            key={item.id}
            image={item}
            index={index}
            handleImageClick={handleImageClick}
          />
        ))}
      </ul>

      {selectedImage && (
        <div
          className='dismiss fixed inset-0 w-full h-full bg-[#000000d9] flex items-center justify-center'
          onClick={handleDismiss}
        >
          <button
            className='absolute top-1/2 -translate-y-1/2 left-[26%] text-white text-4xl shadow'
            onClick={handlePrev}
          >
            <FaCircleChevronLeft />
          </button>
          <img
            src={selectedImage}
            alt='test'
            className='max-h-[80%] max-w-[60%] mx-auto'
          />
          <button
            className='absolute top-1/2 -translate-y-1/2 right-[26%] text-white text-4xl shadow'
            onClick={handleNext}
          >
            <FaCircleChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
