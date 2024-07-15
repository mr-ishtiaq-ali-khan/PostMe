import React from 'react';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import "./../../assets/styles/navigationBar.scss";

/**
 * The NavigationBar component is a functional component in TypeScript React that renders a navigation
 * bar with a logo and text.
 * @returns A React functional component named NavigationBar is being returned. It consists of a div
 * element with the class name "navbar" containing another div element with the class name
 * "navbarLogo". Inside the "navbarLogo" div, there is a span element with the text "Post Me" and an
 * icon component named DynamicFeedIcon.
 */
const NavigationBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
         <span>
            <DynamicFeedIcon />
            Post Me
         </span>
      </div>
    </div>
  );
};

export default NavigationBar;
