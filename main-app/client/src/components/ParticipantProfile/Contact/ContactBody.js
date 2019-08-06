import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Container } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { formatPhoneNumber } from '../../../utilities/phoneFormatter'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

const InfoItem = props => {
  const classes = useStyles()
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

const ContactBody = ({ contactInfo }) => {
  const classes = useStyles()
  console.log('ContactBody Rendered')
  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <InfoItem
          xs={12}
          sm={3}
          title="Clinic Attended"
          desc={contactInfo.clinic}
        />
        <InfoItem xs={12} sm={3} title="Date of Birth" desc={contactInfo.dob} />
        <InfoItem
          xs={12}
          sm={3}
          title="Drivers License"
          desc={contactInfo.dl}
        />
        <InfoItem
          xs={12}
          sm={3}
          title="Phone Number"
          desc={formatPhoneNumber(contactInfo.phone)}
        />
        <InfoItem
          xs={12}
          sm={3}
          title="Email Address"
          desc={contactInfo.email}
        />
        <InfoItem xs={12} sm={3} title="Address" desc={contactInfo.address} />
      </Grid>
    </Container>
  )
}

ContactBody.propTypes = {
  contactInfo: PropTypes.object,
}

ContactBody.defaultProps = {
  contactInfo: {},
}

export default ContactBody
