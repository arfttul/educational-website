import React from "react";

const Banner = (props) => {
  return (
    <div className="bg-indigo-50 p-4 h-auto shadow-lg rounded-s ">
      <div className="grid grid-cols-4 gap-4 ">{props.children}</div>
    </div>
  );
};

export default Banner;
