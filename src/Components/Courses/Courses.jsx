import React from "react";
import webCourses from "../../Data/web-dev-courses";
import Banner from "../Banner/Banner";

const Courses = () => {
  return (
    <div>
      <Banner>
        {webCourses.map((course) => (
          <div> {course} </div>
        ))}
      </Banner>
    </div>
  );
};

export default Courses;
