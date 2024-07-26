import React from 'react';

const BackgroundWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="landing-container">
        {children}
      </div>
    );
  };

export default BackgroundWrap;
