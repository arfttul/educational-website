import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Academic from "../Courses/Academic";
import AppDev from "../Courses/AppDev";
import WebDev from "../Courses/WebDev";

const Home = (props) => {
  console.log(props.v);

  return (
    <div>
      <center className="text-4xl mt-4"> Web Development Courses</center>
      <WebDev margin={"mb-10 mt-4"} />
      <center className="text-4xl mt-4">App Development Courses</center>
      <AppDev margin={"mb-10 mt-4"} />
      <center className="text-4xl mt-4"> University Academic Courses</center>
      <Academic margin={"mb-10 mt-4"} />
    </div>
  );
};

export default Home;
