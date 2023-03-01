import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <li style={{ listStyle: "none" }}>
        <a href="https://twitter.com" className="aStyle">
          <FaTwitter />
        </a>
      </li>
      <li style={{ listStyle: "none" }}>
        <a href="https://facebook.com" className="aStyle">
          <FaFacebook />
        </a>
      </li>
      <li style={{ listStyle: "none" }}>
        <a href="https://linkedin.com" className="aStyle">
          <FaLinkedin />
        </a>
      </li>
    </div>
  );
};

export default SocialIcons;
