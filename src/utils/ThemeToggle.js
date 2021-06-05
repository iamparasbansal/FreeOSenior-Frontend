import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined'
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '1.5rem',
    color:
      theme.palette.type.localeCompare('light') === 0
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
    paddingRight: theme.spacing(1),
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'flex-end',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    color:
      theme.palette.type.localeCompare('light') === 0
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
  },
  fakeInput: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: theme.myConfigButtonWidth,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor:
      theme.palette.type.localeCompare('light') === 0
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
  },
}))

const ThemeToggle = (props) => {
  const classes = useStyles()
  const [themeFlag, setThemeFlag] = React.useState(props.themeType || 'light')

  const handleToggle = () => {
    if (props.hasOwnProperty('themeType') && props.hasOwnProperty('setThemeType')) {
      const newType = props.themeType === 'light' ? 'dark' : 'light'
      props.setThemeType(newType)
      setThemeFlag(newType)
    } else {
      setThemeFlag(themeFlag === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <Button variant="contained" className={classes.buttonWrapper} onClick={handleToggle}>
      {themeFlag === 'light' ? (
        <NightsStayOutlinedIcon className={classes.icon} />
      ) : (
        <Brightness5OutlinedIcon className={classes.icon} />
      )}
      <div className={classes.fakeInput}>
        <Typography variant="subtitle1" align="left">
          {themeFlag === 'light' ? (
            <React.Fragment>Dark Theme</React.Fragment>
          ) : (
            <React.Fragment>Light Theme</React.Fragment>
          )}
        </Typography>
        <ChevronRightIcon fontSize="small" />
      </div>
    </Button>
  )
}

ThemeToggle.propTypes = {
  themeType: PropTypes.string,
  setThemeType: PropTypes.func,
}

export default ThemeToggle