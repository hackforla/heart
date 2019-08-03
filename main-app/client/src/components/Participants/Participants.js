import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { useFetch } from '../../hooks/useFetch'
import fieldFormatter from '../../utilities/fieldFormatter'
import { headers } from './tableHeadersApi'
import ParticipantsTable from './ParticipantsTable'

export const Participants = () => {
  const [{ isLoading, isError, data }, setParticipants] = useFetch(
    'participants'
  )

  const [theaders, settheaders] = useState(headers)
  const [tableData, setTableData] = useState('')

  useEffect(() => {
    const getSelectedDataFields = record => {
      return _.reduce(
        theaders,
        (res, val) => {
          let fieldLabel = _.map([val], 'as')
          let fieldValues = _.map([val['fields']])
          let formatType = _.map([val], 'format')
          res[fieldLabel[0]] = _.reduce(
            fieldValues,
            (res, val) => {
              res = _.join(
                _.map(val, x => {
                  let field = _.map([record], x)
                  field = fieldFormatter(formatType[0], field[0])
                  return field
                }),
                ' '
              )
              return res
            },
            {}
          )
          return res
        },
        {}
      )
    }

    setTableData(_.map(data, x => getSelectedDataFields(x)))
  }, [data, theaders])

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <ParticipantsTable
            initOrderBy="Name"
            headers={theaders}
            records={tableData}
          />
        </>
      )}
    </>
  )
}

export default Participants
