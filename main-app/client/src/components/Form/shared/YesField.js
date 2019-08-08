import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  agreementGroup: {
    display: 'flex',
    margin: '10px 0px 10px 0px',
    alignItems: 'center',
  },
  list: {
    marginLeft: '50px',
  },
  agreementContent: {
    width: '2000px',
    flexGrow: '1000',
    marginRight: '30px',
  },
  button: {
    width: '500px',
    flexGrow: '0',
    backgroundColor: '#b5b3b3',
    height: '60px',
    minWidth: '150px',
    '&:hover': {
       backgroundColor: '#b5b3b3'
    },
  },
  selected: {
    background: '#339900',
    color: 'white',
    '&:hover': {
      backgroundColor: '#339900',
      color: 'white',
    },
  },
}))

export const YesField = ({
  index,
  field: { name },
  value,
  values,
  onChange,
  className,
}) => {
  const classes = useStyles()
  return (
    <div key={index} className={`${classes.agreementGroup} ${className ? classes.list : ''}`}>
      <div className={classes.agreementContent}>{name}</div>
      <Button
        className={`${classes.button} ${values[value] ? classes.selected : ''}`}
        onClick={() => onChange(value, !values[value])}
        size="large"
      >
        Yes
      </Button>
    </div>
  )
}

export default YesField
