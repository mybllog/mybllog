import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex justify-center relative top-0 '>
      <footer className='max-w-screen-xl w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2  bg-gray-400'>
          <div className='p-4 md:px-8 md:py-4'>
            <p className='uppercase text-sm text-white'>Sale 20% off all store</p>
            <p className=' first-letter:uppercase text-3xl font-bold text-white'>Subscribe to our Newsletter</p>
          </div>
          <div className='p-4 md:px-8 md:py-4 flex flex-col md:flex-row items-center'>
            <input
              type='text'
              className='w-full md:w-60 p-2 md:mr-2 mb-2 md:mb-0'
              placeholder='Enter Your Email'
            />
            <button className='bg-pink-500 text-white px-4 py-2 md:px-6 md:py-2'>
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Subscribe;
