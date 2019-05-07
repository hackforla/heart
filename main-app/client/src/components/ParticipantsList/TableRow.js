import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TableRow = ({ record }) => {
  return (
    <tr>
      {Object.keys(record).map((key, index) => (
        <td key={index}>{record[key]}</td>
      ))}
      <td>
        <Link to="/participants/1">
          <span className="view-profile-link">view profile</span>
        </Link>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  record: PropTypes.object,
};

export default TableRow;
