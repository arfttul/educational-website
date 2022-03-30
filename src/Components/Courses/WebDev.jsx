import React from "react";
import Banner from "../Banner/Banner";
import webCourses from "../../Data/web-dev-courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const WebDev = (props) => {
  return (
    <div>
      <Banner>
        {webCourses.map((course) => (
          <div className="border flex flex-col items-center">
            <img className="object-fill" src={course.img} alt={course.name} />
            <h2 className="text-3xl">{course.name}</h2>
            <h3 className="text-2xl">Duration: {course.time}</h3>
            <h3>
              <FontAwesomeIcon icon={faDollarSign} />
              {course.fees}
            </h3>
          </div>
        ))}
      </Banner>
    </div>
  );
};

export default WebDev;
