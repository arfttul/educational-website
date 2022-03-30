import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Components/Logo/Logo";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="bg-gray-700 text-yellow-50 fixed inset-x-0 bottom-0 py-12 px-72 h-80">
      <div className="logo-social flex justify-between items-center">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="social-medial-link">
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faFacebook}
              size="3x"
            />{" "}
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faYoutube}
              size="3x"
            />{" "}
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faTwitter}
              size="3x"
            />{" "}
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faInstagram}
              size="3x"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
