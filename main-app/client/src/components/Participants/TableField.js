import React from 'react'
import PropTypes from 'prop-types'
import {
  tableDateFormatter,
  tableCombinedDateFormatter,
} from '../../utilities/dateFormatter'

/*
Keeping for possible future use
 */

const TableField = ({ record, formatter }) => {
  //So... Dear reader, I've passed us some sort of formatting voodoo
  //  through the formatter field ^^. each object passed has
  //  a key which is somewhat the item to be rendered,
  //  but also has key:values to help you.
  /// 'as', which is a friendly human display
  /// 'fields', an array of db fields to display, in order.
  /// 'format', to help switch off to give display hints.

  return (
    <>
      {(() => {
        switch (formatter.format) {
          case 'string':
            return formatter.fields.map(field => {
              return record[field] + ' '
            })
          case 'date':
            return formatter.fields.map(field => {
              return tableDateFormatter(record[field]) + ' '
            })
          case 'dateTime':
            return formatter.fields.map(field => {
              return tableCombinedDateFormatter(record[field]) + ' '
            })
          case 'flame':
            return record[formatter.fields[0]] === true
              ? 'flame on'
              : 'flame off'
          default:
            return null
        }
      })()}
    </>
  )
}

TableField.propTypes = {
  record: PropTypes.object,
  formatter: PropTypes.object,
}

export default TableField
