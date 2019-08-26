import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@material-ui/core'

export const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default TabPanel
