import React, { useEffect, useState } from 'react'
import { Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Loader from '../UI/Loader'
import Error from '../UI/Error'
import { Link as RouterLink } from 'react-router-dom'
import _ from 'lodash'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useFetch } from '../../hooks/useFetch'
import { Contact } from './Contact'
import { Citations } from './Citation'
import { Note } from './Note'
import fieldFormatter from '../../utilities/fieldFormatter'
import { StatusX } from './Status'

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1, paddingTop: theme.spacing(8) },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#252525',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 600,
    '&:hover': {
      color: '#428FE2',
      textDecoration: 'none',
    },
  },
  arrowLeft: {
    display: 'inline-block',
  },
}))

/*
refactored to use fetch hook but still pending connecting the crud actions
to each form.
Also removed sass requirement and using material-ui grid
 */

export const ParticipantProfile = ({ match }) => {
  const [{ data, isError, isLoading }] = useFetch(
    `participants/${match.params.id}`
  )
  const [isFormatting, setFormatting] = useState(true)
  const [contactInfo, setContactInfo] = useState({})
  const [noteInfo, setNoteInfo] = useState({})
  const [statusInfo, setStatusInfo] = useState({})
  const [citationInfo, setCitationInfo] = useState([{}])
  const classes = useStyles()

  useEffect(() => {
    // Move this Schema and Other Schemas to an API Data folder
    const contactSchema = [
      {
        label: 'First Name',
        value: '',
        name: 'first_name',
        format: 'string',
      },
      {
        label: 'Last Name',
        value: '',
        name: 'last_name',
        format: 'string',
      },
      {
        label: 'Clinic Attended',
        value: '',
        name: 'clinic',
        format: 'string',
      },
      {
        label: 'Date of Birth',
        value: '',
        name: 'dob',
        format: 'date',
      },
      {
        label: 'Driver License',
        value: '',
        name: 'dl',
        format: 'string',
      },
      {
        label: 'Phone Number',
        value: '',
        name: 'phone',
        format: 'string',
      },
      {
        label: 'Email Address',
        value: '',
        name: 'email',
        format: 'string',
      },
      {
        label: 'Aka',
        value: '',
        name: 'aka',
        format: 'string',
      },
      {
        label: 'Address',
        value: '',
        name: 'address',
        format: 'string',
      },
    ]
    const getFields = (obj, fieldList) => {
      let formatTypes = _.map(fieldList, 'format')
      let filteredObj = {}
      _.map(_.map(fieldList, 'name'), (val, idx) => {
        filteredObj[val] = fieldFormatter(formatTypes[idx], obj[val])
      })
      return filteredObj
    }
    setContactInfo(_.map(data, x => getFields(x, contactSchema)))
    setFormatting(false)
  }, [data])

  const handleFormUpdate = newData => {
    setContactInfo(newData)
  }
  return (
    <>
      {isLoading || isFormatting ? (
        <Loader />
      ) : (
        <div className={classes.root}>
          <Link
            component={RouterLink}
            to="/participants"
            classes={{ root: classes.link }}
          >
            <ArrowBackIcon />
            {isError && <Error error={isError} />}
            <span className={classes.arrowLeft}>Back to Index</span>
          </Link>
          <br />
          <Contact
            contactInfo={contactInfo[0]}
            handleFormUpdate={handleFormUpdate}
          />
          <br />
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Note />
              <br />
              <br />
              <Citations />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatusX />
            </Grid>
          </Grid>
          <br />
          <br />
          {JSON.stringify(data)}
        </div>
      )}
    </>
  )
}

export default ParticipantProfile
