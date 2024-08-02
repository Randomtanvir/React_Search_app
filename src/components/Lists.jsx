import React from "react";

const Lists = ({ data }) => {
  return (
    <div>
      <div
        className="
          sm:h-[600px]
          h-[500px]
          sm:w-[400px]
          w-[350px]
          p-5
          ring-[#ffffff31]
          ring-inset
          bg-gradient-to-r
          from-[rgba(255,255,255,0.07)]
          to-[rgba(255,255,255,0)]
          backdrop-blur-[10px]
          shadow-2xl
          shadow-[rgba(0,0,0,0.18)] mt-6 rounded-md text-2xl flex flex-col gap-3 text-center text-white ease-in duration-500 overflow-auto"
      >
        {data?.map(({ name }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            onClick={() => alert("This is " + name)}
            key={Math.random()}
            className="ease-in duration-200 p-4 rounded-md hover:bg-[#dadada36] cursor-pointer"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
