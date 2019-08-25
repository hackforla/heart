import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const FormSection = ({ heading, children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography gutterBottom variant="h5" componet="h4">
        {heading}
      </Typography>
      {children}
    </Box>
  )
}

FormSection.propTypes = {
  heading: PropTypes.string,
}

export default FormSection
