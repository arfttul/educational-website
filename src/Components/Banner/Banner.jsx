import React from "react";

const Banner = (props) => {
  return (
    <div>
      <div className={`bg-indigo-50 p-4 h-100 shadow-lg rounded-s `}>
        <div className="grid grid-cols-4 gap-4 ">{props.children}</div>
      </div>
    </div>
  );
};

export default Banner;
