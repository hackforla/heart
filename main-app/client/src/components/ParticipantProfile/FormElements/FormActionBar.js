import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'no-wrap',
    justifyContent: 'flex-end',
    backgroundColor: '#F4F6F8',
  },
}))

export const FormActionBar = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

FormActionBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default FormActionBar
