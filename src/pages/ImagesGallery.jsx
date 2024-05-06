import Gallery from '../components/gallery/Gallery';

const ImagesGallery = () => {
  return (
    <div>
      <div className='w-full h-full bg-[#fff] rounded-lg shadow-md px-16 py-12'>
        <h1 className='text-2xl font-medium mb-3'>Light gallery</h1>
        <p className='mb-3'>Click on any image to open in lightbox gallery</p>
        <Gallery />
      </div>
    </div>
  );
};

export default ImagesGallery;
