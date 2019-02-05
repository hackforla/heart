import React from 'react';

const Error = ({ error }) => (
  <div className='error-container'>
    { error && <div className='error-message'>{error}</div> }
  </div>
)

export default Error;