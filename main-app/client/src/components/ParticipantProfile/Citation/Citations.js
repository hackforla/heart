import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow, Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationForm from './CitationForm'
import CitationHeader from './CitationHeader'
import _ from 'lodash'
import { Violations } from '../Violations'
import { useFetch } from '../../../hooks/useFetch'
import CitationInfo from './CitationInfo'
import fieldFormatter from '../../../utilities/fieldFormatter'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
}))

export const Citations = ({ userId }) => {
  const [{ isLoading, isError, data }, fetchData] = useFetch(
    `citations/${userId}`
  )
  const [isFormatting, setFormatting] = useState(true)
  const [citationInfo, setCitationInfo] = useState([{}])
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    console.log('submitted')
  }

  useEffect(() => {
    const citationSchema = [
      {
        label: 'Citation No.',
        value: '',
        name: 'citation_number',
        format: 'string',
      },
      {
        label: 'Court Code',
        value: '',
        name: 'court_code',
        format: 'string',
      },
      {
        label: 'Status',
        value: '',
        name: 'citation_status',
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
    setCitationInfo(_.map(data, x => getFields(x, citationSchema)))
    setFormatting(false)
  }, [data])

  console.log('Contact Rendered')
  return (
    <Paper className={classes.root}>
      {isLoading || isFormatting ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <CitationHeader
            heading="Citations"
            subHeading="With related violations"
            handleClick={toggleEdit}
            disabled={isEditing}
          />
          <Divider />
          {!isEditing && (
            <>
              <CitationInfo citation={citationInfo[0]} />
              <Violations
                violations={data[0]['violations']}
                isEditing={!isEditing}
              />
            </>
          )}

          {isEditing && (
            <Grow in={isEditing}>
              <Paper className={classes.paper}>
                <Violations
                  violations={data[0]['violations']}
                  isEditing={isEditing}
                />
                <CitationForm
                  handleFormSubmit={handleFormSubmit}
                  isEditing={isEditing}
                  initialValues={citationInfo[0]}
                  handleCancel={handleCancel}
                />
              </Paper>
            </Grow>
          )}
        </>
      )}
    </Paper>
  )
}

Citations.propTypes = {
  citationInfo: PropTypes.object,
}

Citations.defaultProps = {
  citationInfo: {},
}

export default React.memo(Citations)
