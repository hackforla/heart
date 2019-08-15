import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  outerBox: {
    border: '1px solid gray',
    display: 'flex',
    fontSize: '16px',
  },
  boxName: {
    width: '2000px',
    flexGrow: '1000',
    padding: '10px',
  },
  button: {
    width: '400px',
    flexGrow: '0',
    textAlign: 'center',
    borderLeft: '1px solid gray',
    padding: '10px',
    height: '100%',
    borderRadius: 'unset',
  },
  active_yes: {
    backgroundColor: '#b5b3b3',
    borderBottom: '2px solid #339900',
  },
  active_no: {
    backgroundColor: '#b5b3b3',
    borderBottom: '2px solid red',
  },
}))

export const YesNoField = ({ index, box_input, values, setFieldValue }) => {
  const classes = useStyles()
  return (
    <div className={classes.outerBox} key={index}>
      <div className={classes.boxName}>{box_input.name}</div>
      <Button
        className={`${classes.button} ${
          values[box_input.name] ? classes.active_yes : ''
        }`}
        onClick={() => setFieldValue(box_input.name, true)}
      >
        Yes
      </Button>
      <Button
        className={`${classes.button} ${
          !values[box_input.name] ? classes.active_no : ''
        }`}
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
