import Carousel from '../components/carousel/Carousel';

const CarouselPage = () => {
  return (
    <>
      <div className='row flex gap-10'>
        <div className='rounded bg-[#fff] p-10 w-full'>
          <h2 className='text-xl mb-4'>Basic carousel</h2>
          <Carousel />
        </div>
        <div className='rounded bg-[#fff] p-10  w-full'>
          <h2 className='text-xl'>Carousel with caption</h2>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
