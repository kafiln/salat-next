import React from 'react';

function CenteredLayout({ children, className }) {
  return (
    <div className={`flex items-center justify-center h-screen ${className} `}>
      {children}
    </div>
  );
}

export default CenteredLayout;
