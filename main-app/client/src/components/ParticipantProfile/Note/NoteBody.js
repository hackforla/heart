import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: 300,
    overflow: 'auto',
  },
}))

const NoteBody = ({ note }) => {
  const classes = useStyles()
  return (
    <Box component="div">
      <Container className={classes.root}>
        <Typography variant="body2" component="pre">
          {note}
        </Typography>
      </Container>
    </Box>
  )
}

NoteBody.propTypes = {
  note: PropTypes.string,
}

export default NoteBody
