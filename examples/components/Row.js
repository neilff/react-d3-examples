import React from 'react';

const Row = ({ children }) => {
  return (
    <div className="clearfix">
      { children }
    </div>
  );
};

export default Row;
