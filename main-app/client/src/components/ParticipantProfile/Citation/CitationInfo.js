import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { InfoItem } from '../shared'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#F5F5F5',
  },
}))

const CitationInfo = ({ citation }) => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <InfoItem
          xs={12}
          sm={4}
          title="Citation Number"
          desc={citation.citation_number}
        />
        <InfoItem
          xs={12}
          sm={4}
          title="Court Code"
          desc={citation.court_code}
        />
        <InfoItem
          xs={12}
          sm={4}
          title="Status"
          desc={citation.citation_status}
        />
      </Grid>
    </Container>
  )
}

CitationInfo.propTypes = {
  citation: PropTypes.object,
}

CitationInfo.defaultProps = {
  citation: {},
}

export default CitationInfo
