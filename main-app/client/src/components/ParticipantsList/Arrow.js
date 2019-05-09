import React from 'react';

const Arrow = ({ direction, handleClick }) => {
  let entityCode = {
    left: '\u25C0',
    right: '\u25B6',
    up: '\u25B2',
    down: '\u25BC',
    last: '\u00BB',
    first: '\u00AB',
  };
  return <span onClick={handleClick}>{entityCode[direction]} </span>;
};

export default Arrow;
