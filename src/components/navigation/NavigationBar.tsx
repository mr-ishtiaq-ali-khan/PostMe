import React from 'react';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import "./../../assets/styles/navigationBar.scss";

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
