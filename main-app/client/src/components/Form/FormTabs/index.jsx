import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const FormTabs = ({ forms }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const renderTabs = forms =>
    forms.map(({ label }, i) => {
      return <Tab key={i} label={label} {...a11yProps(i)} />
    })

  const renderForms = forms =>
    forms.map(({ Form, props }, i) => (
      <TabPanel key={i} index={i} value={value}>
        <Form {...props} />
      </TabPanel>
    ))

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Simple tabs example"
        >
          {renderTabs(forms)}
        </Tabs>
      </AppBar>
      {renderForms(forms)}
    </div>
  )
}

FormTabs.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      // display name of the form tab
      label: PropTypes.string.isRequired,

      // can either be a class component or functional component
      Form: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
        .isRequired,

      // optional props that'll be passed to the form component
      // when rendered
      props: PropTypes.object,
    })
  ),
}

export default FormTabs
