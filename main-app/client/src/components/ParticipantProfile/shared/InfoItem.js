import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

export const InfoItem = ({ ...props }) => {
  return (
    <Grid item {...props}>
      <Typography component="h3" variant="overline" color="textSecondary">
        {props.title}
      </Typography>
      <Typography variant="caption" color="textPrimary">
        {props.desc || 'N/A'}
      </Typography>
    </Grid>
  )
}

InfoItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

InfoItem.defaultProps = {
  title: '',
  desc: '',
}

export default InfoItem
