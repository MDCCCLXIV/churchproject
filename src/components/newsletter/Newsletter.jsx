import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full min-h-[28vh] max-h-[35vh] text-white text-center overflow-y-auto flex items-center justify-center">
      <div className="w-full rounded-md md:h-[25vh] bg-orange-400 max-w-6xl">
        <div className="flex flex-col w-full m-auto  bg-orange-400 p-4">
          <span className="text-white font-bold text-xl md:text-3xl text-center">
            Stay Virtually Connected
          </span>
          <p className="mx-auto text-sm my-2">
            To stay updated on what is happening and get inspirational
            messages, make sure to subscribe
          </p>
          <div className="block md:flex w-full md:w-[80%] justify-center px-4 mb-auto mx-auto mt-2">
            <input
              className="border w-full md:w-[80%] text-center p-1 md:p-2 rounded-full text-black outline-none"
              type="email"
              placeholder="email address"
            />
            <button
              type="submit"
              className="mt-2 md:mt-0 md:mx-2 rounded-full w-[50%] md:w-[20%] p-1 bg-orange-300 font-medium text-base text-white hover:bg-orange-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
