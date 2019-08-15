import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import uuid from 'uuid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

export const StatusBody = ({ bgCheck }) => {
  const classes = useStyles()
  return (
    <Box component="div">
      <Container className={classes.root}>
        <List>
          <ListItem>
            <ListItemText primary="Databases Checked " />
          </ListItem>
          {['CCHRS', 'W&W', 'DMV', 'TCIS', 'Odyssey', 'JPP'].map(x => (
            <ListItem key={uuid()}>
              <ListItemIcon>
                {_.indexOf(bgCheck, x) >= 0 ? (
                  <CheckBoxIcon />
                ) : (
                  <CheckBoxOutlineBlankIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}
StatusBody.defaultProps = {}

StatusBody.propTypes = {
  bgCheck: PropTypes.array,
}

export default React.memo(StatusBody)
