import React from 'react';
import { LuCalendarDays } from 'react-icons/lu';

const About = () => {
  const eventsData = [
    { Time: '1800hrs-1900hrs', event: 'Bible Study', Date: 'Wednesdays', image: '/assets/images/church2.avif' },
    { Time: '1800hrs-1900hrs', event: 'Prayers', Date: 'Fridays', image: '/assets/images/church3.avif' },
    { Time: '0900hrs-1300hrs', event: 'Sunday Services', Date: 'Sundays', image: '/assets/images/church1.avif' }
  ];

  return (
    <div>
      <div className='flex flex-col w-full h-[75vh] md:h-[50vh] p-2'>
        <div className='block md:flex w-full h-full md:h-full md:mx-auto md:max-w-6xl'>
          <div className='flex w-full flex-col md:w-[35%] m-auto h-[30%]'>
            <span className='text-2xl font-bold text-center'>Welcome to Gethsemane</span>
            <p className='md:text-lg text-center'>
              We welcome you with great joy to Gethsemane life Church. We are here to share the great news of Jesus
              Christ to all that will listen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo est
              nulla, beatae deserunt quis!
            </p>
          </div>
          <div className='flex flex-col w-full h-[70%] md:w-[60%] md:h-full p-2'>
            <span className='text-center font-semibold text-2xl md:text-4xl mt-auto'>Services</span>
            <div className='grid w-full h-[100%] md:h-[70%] md:m-auto gap-1 grid-cols-1 grid-flow-row md:grid-cols-2 md:grid-rows-2'>
              {eventsData.map((event) => (
                <div
                  key={event.event}
                  className='flex m-1 rounded-md shadow-xl bg-cover bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${event.image})` }}
                >
                  <div className='flex bg-black/40 text-white w-full rounded'>
                    <img
                      className='object-center w-[100px] h-[100px] md:w-[120px] md:h-[120px] m-auto rounded-full object-cover'
                      src={`${import.meta.env.BASE_URL}${event.image}`}
                      alt=''
                    />
                    <div className='flex flex-col w-[60%]'>
                      <div className='flex flex-col w-full h-[60%] m-auto'>
                        <span className='w-full text-base md:text-lg text-center font-semibold flex m-auto'>
                          <LuCalendarDays className='mx-1 my-auto' size={20} />
                          {event.Date}
                        </span>
                        <span className='w-full text-base font-medium'>{event.event}</span>
                        <p className='w-full text-base'>{event.Time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
