import React from 'react';

const GroupCards = () => {
  const connection = [
    { Title: 'Kids', Date: '01/01/2023', image: 'src/assets/images/kids.webp' },
    { Title: 'Ladies', Date: '01/01/2023', image: 'src/assets/images/women.jpg' },
    { Title: 'Men', Date: '01/01/2023', image: 'src/assets/images/men.webp' },
    { Title: 'Youth', Date: '01/01/2023', image: 'src/assets/images/church4.avif' },
    { Title: 'Welfare', Date: '01/01/2023', image: 'src/assets/images/church4.avif' },
    { Title: 'Worship Team', Date: '01/01/2023', image: 'src/assets/images/church1.avif' }
  ];

  return (
    <div className='w-full h-[100%] flex flex-col rounded'>
      <div className='flex relative w-full max-w-6xl m-auto h-full rounded'>
        <div className='flex w-full h-full overflow-x-scroll no-scrollbar rounded p-1'>
          {connection.map((connect, index) => (
            <div
              key={index}
              className='flex flex-col flex-shrink-0 w-[75%] md:w-[350px] p-1 h-[100%] mx-2 rounded shadow-md bg-white'
            >
              <div className='flex w-full h-[70%] rounded-lg overflow-hidden'>
                <img
                  className='object-center w-full h-full object-cover rounde-lg'
                  src={`${import.meta.env.BASE_URL}${connect.image}`}
                  alt=''
                />
              </div>
              <div className='flex w-full h-[30%] flex-col text-sm p-1 my-1'>
                <span className='w-full text-base font-bold'>{connect.Title}</span>
                <p className='text-sm mt-1 w-[100%] md:w-[345px]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae magnam, corporis rem quos mollitia.
                </p>
              </div>
              <button className='w-[50%] md:w-[150px] bg-purple-600 mt-auto mb-2 rounded-full mx-auto'>Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupCards;
