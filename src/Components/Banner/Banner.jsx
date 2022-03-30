import React from "react";

const Banner = (props) => {
  return (
    <div className="bg-indigo-50 p-4 h-96 ">
      <div className="grid grid-cols-4  ">{props.children}</div>
    </div>
  );
};

export default Banner;
