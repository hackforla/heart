import { tableCombinedDateFormatter, tableDateFormatter } from './dateFormatter'
import _ from 'lodash'

const fieldFormatter = (type, data) => {
  let tempData = data ? data : ''
  switch (type) {
    case 'string':
      return _.trim(tempData + ' ')
    case 'date':
      return tableDateFormatter(tempData)
    case 'dateTime':
      return tableCombinedDateFormatter(tempData)
    default:
      return tempData
  }
}

export default fieldFormatter
