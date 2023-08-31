import React from 'react';
import Groups from './Groups';

const Connections = () => {
  return (
    <div className="flex flex-col w-full min-h-[65vh] max-h-[75vh] outline outline-blue-700 p-2">
      <div className="flex flex-col w-full h-full mx-auto max-w-6xl">
        <div className="flex">
          <Groups />
        </div>
      </div>
    </div>
  );
};

export default Connections;
