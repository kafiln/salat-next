import React from 'react';

function CenteredLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}

export default CenteredLayout;
