import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

export const YesNoField = ({ index, box_input, values, setFieldValue }) => {
  return (
    <div className="outer-box" key={index}>
      <div className="name">{box_input.name}</div>
      <Button
        className={`yes ${values[box_input.name] ? 'active green' : ''}`}
        onClick={() => setFieldValue(box_input.name, true)}
      >
        Yes
      </Button>
      <Button
        className={`no ${!values[box_input.name] ? 'active red' : ''}`}
        onClick={() => setFieldValue(box_input.name, false)}
      >
        No
      </Button>
    </div>
  )
}

YesNoField.propTypes = {
  box_input: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default YesNoField
