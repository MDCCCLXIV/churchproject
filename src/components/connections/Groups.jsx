
import React from 'react';
import GroupCards from './GroupCards';

const Groups = () => {
  return (
    <div className="flex flex-col w-full min-h-[75vh] max-h-[85vh] mx-auto justify-between">
      <div className="flex flex-col h-[40%] mx-auto w-full text-center">
      <span className="text-4xl md:w-[80%] mx-auto w-full mb-3 text-center">
          Connections
        </span>
        <span className="font-medium text-lg mb-3 text-orange-400 text-center">
          Groups + Ministries + more
        </span>
        <p className="text-sm md:text-base md:w-[70%] mx-auto my-1 p-1 text-center">
          The “church” is not a building, a denomination, or a business
          organization. It's a family of people who agree about Jesus. Every
          believer needs a church home, and we also need a small group of other
          believers for support and encouragement.
        </p>
      </div>
      <div className="flex w-full h-[60%] mt-auto items-center justify-center ">
        <div className="w-full h-full">
          <GroupCards />
        </div>
      </div>
    </div>
  );
};

export default Groups;

