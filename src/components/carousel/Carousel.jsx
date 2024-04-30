import { useEffect, useState } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import Loading from '../loadings/Loading';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // fetch('https://cataas.com/api/cats?tags=cute&skip=0&limit=10')
    //   .then((res) => res.json())
    //   .then((data) => setImages(data))
    //   .finally(() => setLoading(false));
    setImages([
      'banner_1',
      'banner_2',
      'banner_3',
      'banner_4',
      'banner_5',
      'banner_6',
      'banner_7',
      'banner_8',
      'banner_9',
      'banner_10',
      'banner_11',
      'banner_12',
    ]);
    setLoading(false);
  }, []);

  const handleNavigateLeft = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNavigateRight = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className='w-full relative'>
        {/* <img
          src={`https://cataas.com/cat/${images[current]._id}`}
          className='max-w-full object-cover'
          alt='crs1'
        /> */}
        <img
          src={`/assets/images/carousels/${images[current]}.jpg`}
          className='max-w-full object-cover'
          alt='crs1'
        />
        <button
          className='absolute top-1/2 -translate-y-1/2 left-6 text-white text-4xl shadow'
          onClick={handleNavigateLeft}
        >
          <FaCircleChevronLeft />
        </button>
        <button
          className='absolute top-1/2 -translate-y-1/2 right-6 text-white text-4xl shadow'
          onClick={handleNavigateRight}
        >
          <FaCircleChevronRight />
        </button>
      </div>
      <p className='text-center mt-2'>
        Image {`${current + 1} / ${images.length}`}
      </p>
    </>
  );
};

export default Carousel;
