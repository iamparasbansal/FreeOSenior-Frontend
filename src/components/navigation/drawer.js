import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import Logo from "./../../images/gatsby-icon.png"

const useStyles = makeStyles(theme => ({
  root: {
    width: "250px",
  },
  navItem: {
    cursor: "pointer",
    padding: theme.spacing(1),
    marginTop: "2px",
    color: theme.palette.text.light,
    borderLeft: "4.5px solid transparent",
    transition: "0.35s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main + 11,
    },
  },
  activeNavItem: {
    cursor: "default",
    padding: theme.spacing(1.3),
    marginRight: theme.spacing(1),
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    color: theme.palette.primary.main,
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main + 22,
  },
  logoText: {
    marginLeft: 7,
    marginBottom: 3,
    color: "#1C3B6B",
  },
}))

const Drawer = ({ isOpen, handler, AuthModel }) => {
  const classes = useStyles()

  return (
    <SwipeableDrawer
      classes={{ paper: classes.root, root: classes.root }}
      open={isOpen}
      onClose={() => handler(false)}
      onOpen={() => handler(true)}
      style={{ overflowX: 'hidden' }}
    >
      <Link
        to="/home"
        style={{
          all: "unset",
          cursor: "pointer",
          color: "#FFF",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          p={2}
          css={{
            flexShrink: 0,
            flexBasis: "calc(100% / 10)",
          }}
          className={classes.logoBox}
        >
          <img
            src={Logo}
            alt={"freeosenior logo"}
            style={{
              height: 35,
              color: "#FFF",
              margin: "0px 2px 0px 0px",
            }}
            className={classes.logo}
          />
          <Typography variant={"h6"} className={classes.logoText}>
            FreeOSenior
          </Typography>
        </Box>
      </Link>
      <Link
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
        to="/home"
      >
        <Typography variant="subtitle2">Home</Typography>
      </Link>
      <Link
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
        to="/tutorials"
      >
        <Typography variant="subtitle2">Tutorials</Typography>
      </Link>
      <Link
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
        to="/projectNotes"
      >
        <Typography variant="subtitle2">Project/Notes</Typography>
      </Link>
      <Link
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
        to="/askAQuery"
      >
        <Typography variant="subtitle2">Ask A Query</Typography>
      </Link>
      <Link
        className={classes.navItem}
        activeClassName={classes.activeNavItem}
        to="/joinUs"
      >
        <Typography variant="subtitle2">Join Us</Typography>
      </Link>
      <AuthModel />
    </SwipeableDrawer>
  )
}

export default Drawer