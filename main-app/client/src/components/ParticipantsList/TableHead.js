import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ headings }) => {
  return (
    <thead>
      <tr>
        {headings.map((label, index) =>
          label === '' ? (
            <th key={index} scope="col">
              &nbsp;
            </th>
          ) : (
            <th key={index} scope="col">
              {label}
            </th>
          ),
        )}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
};

export default TableHead;
