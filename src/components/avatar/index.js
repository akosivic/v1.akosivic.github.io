import React from "react";
import "./avatar.css";
import logo from "./img_avatar.jpg";
import ScrollButton from "../scrollbutton";

const Avatar = ({ linkedin, twitter, github, name, description }) => {
  return (
    <div>
      <div class="vertical-center">
        <div>
          <img class="avatar" src={logo} alt="Avatar" />
        </div>
        <div class="profile-description">
          <h3 class="small">{name}</h3>
          <p>{description}</p>
          <p class="social-media">
            {twitter && (
              <a
                href={`https://twitter.com/${twitter}`}
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <i className="fab fa-twitter" />
              </a>
            )}
            {github && (
              <a
                href={`https://github.com/${github}`}
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <i className="fab fa-github" />
              </a>
            )}
            {linkedin && (
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                rel="noopener noreferrer"
                target="_BLANK"
              >
                <i className="fab fa-linkedin" />
              </a>
            )}
          </p>
        </div>
      </div>
      <div class="vertical-center-bottom">
        <ScrollButton></ScrollButton>
      </div>
    </div>
  );
};
export default Avatar;
