import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { formatPhoneNumber } from '../../../utilities/phoneFormatter'
import { InfoItem } from '../shared'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

const ContactBody = ({ contactInfo }) => {
  const classes = useStyles()
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
          sm={4}
          title="Email Address"
          desc={contactInfo.email}
        />
        <InfoItem xs={12} sm={6} title="Address" desc={contactInfo.address} />
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
