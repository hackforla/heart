import React from 'react';

const PaginationBtn = ({ classes, label, handleClick }) => {
  return (
    <span
      className={classes}
      onClick={e => {
        e.preventDefault();
        handleClick(label);
      }}
    >
      {label}
    </span>
  );
};

export default PaginationBtn;
