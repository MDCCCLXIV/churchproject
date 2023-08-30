import React from 'react';

const GroupCards = () => {
  const connection = [
    { Title: 'Kids', Date: '01/01/2023', image: '/assets/images/kids.webp' },
    { Title: 'Ladies', Date: '01/01/2023', image: '/assets/images/women.jpg' },
    { Title: 'Men', Date: '01/01/2023', image: '/assets/images/men.webp' },
    { Title: 'Youth', Date: '01/01/2023', image: '/assets/images/church4.avif' },
    { Title: 'Worship Team', Date: '01/01/2023', image: '/assets/images/church1.avif' }
  ];

  return (
    <div className='w-full h-[100%] flex flex-col rounded'>
      <div className='flex relative w-full max-w-6xl m-auto h-full rounded'>
        <div className='flex w-full h-full overflow-x-scroll no-scrollbar rounded p-1'>
          {connection.map((connect, index) => (
            <div
              key={index}
              className='flex flex-col flex-shrink-0 w-[75%] md:w-[300px]  h-[80%] mx-2 rounded-md bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${connect.image})` }}
            >
              <div className='flex flex-col h-full w-full rounded-md ' style={{ background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.6))` }}>
                <div className='w-full h-[25%] p-2 mt-auto hover:cursor-pointer'>
                  <span className='text-orange-400 flex font-bold'>{connect.Title}</span>
                  <span className='text-white text-2xl font-light flex'>{connect.Title}</span>
                </div>
              </div>
              
         
             
          </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default GroupCards;
