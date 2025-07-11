import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="w-full h-screen grid place-items-center ">
        <div className="flex flex-col items-center">
          <p className="text-red-600 text-sm mt-2 ml-3">Yuklanmoqda...</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loading);
