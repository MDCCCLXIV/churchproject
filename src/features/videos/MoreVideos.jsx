import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

const MoreVideos = () => {
  const messages = [
    { Title: 'Life with Christ', Date: '01/01/2023', image: 'src/assets/images/church2.avif' },
    { Title: 'Life with Christ', Date: '01/01/2023', image: 'src/assets/images/church3.avif' },
    { Title: 'Life with Christ', Date: '01/01/2023', image: 'src/assets/images/church1.avif' },
    { Title: 'Life with Christ', Date: '01/01/2023', image: 'src/assets/images/church4.avif' },
    { Title: 'Life with Christ', Date: '01/01/2023', image: 'src/assets/images/church1.avif' }
  ];

  return (
    <div className='w-full h-[25vh] flex flex-col py-2'>
      <div className='flex relative w-full max-w-6xl m-auto h-full'>
        <span className='absolute font-medium text-base transform -translate-y-1/2 left-2 top-0 px-1'>Sermons</span>
        <a href='#' className='absolute font-medium text-purple-600 transform -translate-y-1/2 right-2 pe-2 top-0 hover:cursor-pointer text-base'>view all</a>
        <div className='flex w-full h-full overflow-x-scroll no-scrollbar'>
          {messages.map((message, index) => (
            <div key={index} className='flex flex-col flex-shrink-0 w-[200px] md:w-[270px] h-[80%] p-1 m-2 rounded shadow-md mt-5 bg-white'>
              <div className='flex w-full h-[65%] rounded overflow-hidden'>
                <img className='object-center w-full h-full object-cover' src={`${import.meta.env.BASE_URL}${message.image}`} alt='' />
              </div>
              <div className='flex w-full h-[35%] flex-col text-sm'>
                <span className='w-full h-[50%]  text-base'>{message.Title}</span>
                <span className='w-full h-[50%] flex'><AiOutlineCalendar size={20} />{message.Date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreVideos;
