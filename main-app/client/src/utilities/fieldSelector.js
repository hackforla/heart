import _ from 'lodash'
import fieldFormatter from './fieldFormatter'
/*
this utility accepts an Object that will pull out the fields from said Object
and format them according to the schema provided.

example schema
[{ label: 'Date of Birth',  field_name: 'dob',format: 'date',}]

* note: field_name must match one of the fields of the object passed in for it
to pull the value
*/

export const fieldSelector = (obj, schema) => {
  let formatTypes = _.map(schema, 'format')
  let filteredObj = {}
  _.map(_.map(schema, 'field_name'), (val, idx) => {
    filteredObj[val] = fieldFormatter(formatTypes[idx], obj[val])
  })
  return filteredObj
}
