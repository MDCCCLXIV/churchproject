import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {RiQuestionnaireLine} from 'react-icons/ri'

const Videos = () => {
  return (
    <div className='w-full  h-full md:h-[80%] my-auto p-2 items-center flex justify-center'>
      <div className="video flex flex-col w-full md:w-[85%] m-auto h-[95%] md:h-[100%] rounded shadow-md p-1 bg-white">
        <div className="flex w-full h-[40%] md:h-[50%] p-1 rounded bg-white">
          <iframe
            className='w-full h-full rounded'
            src="https://www.youtube.com/embed/OP-00EwLdiU"
            frameBorder="0"
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="flex flex-col h-[60%] p-1 mt-2 md:h-[50%]">
          <span className='flex'><AiOutlineHeart size={25} /> 403 likes</span>
          <div className="flex flex-col md:mt-2  h-[60%] justify-between">
            <div className="flex flex-col h-full">
              <span className='font-medium text-2xl'>Message title</span>
            <span className='w-full text-sm mb-1 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium 
            maiores laudantium harum alias omnis ipsum maxime molestias. Rem esse perferendis doloremque fuga officiis a fugiat
            laborum quaerat explicabo sit.
            </span>
            </div>
            <a className='flex text-sm hover:cursor-pointer hover:text-orange-400 '><RiQuestionnaireLine size={25}/><i className='mx-1'>A few questions to help you process, journal or discuss the themes of this message...</i></a>
          </div>
          <button className='w-[50%] md:w-[20%] bg-orange-400 mt-auto mb-2 rounded-full'>View more</button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
