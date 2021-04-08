import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Logo from "./../../images/gatsby-icon.png"
import * as HeaderStyles from "./header.module.scss"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import Drawer from "./drawer"
import AuthModel from "../auth"
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  innerNav: {
    margin: "0 auto",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navItem: {
    cursor: "pointer",
    fontSize: "1.1rem",
    alignSelf: "flex-end",
    padding: "5px 18px",
    color: theme.palette.text.light,
    textAlign: "center",
    backgroundColor: "none",
    transition: "0.35s",
    borderBottom: "4px solid transparent !important",
    paddingBottom: "16px !important",
    "&:hover": {
      backgroundColor: "transparent",
      transition: "0.35s",
      paddingBottom: "16px !important",
      borderBottom: "4px solid #1C3B6B !important",
    },
  },
  activeNavItem: {
    cursor: "default",
    padding: "5px 18px",
    color: theme.palette.primary.main,
    textAlign: "center",
    borderBottom: "4.5px solid #1C3B6B !important",
    paddingBottom: "16px !important",
    "&:hover": {
      borderBottom: "4.5px solid #1C3B6B !important",
      paddingBottom: "16px !important",
      backgroundColor: "transparent",
    },
  },
  logoText: {
    marginLeft: 7,
    marginBottom: 3,
    color: "#000",
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    threshold: 30,
    disableHysteresis: true,
  })
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  return (
    <div className={HeaderStyles.main}>
      <Drawer
        handler={setDrawerOpen}
        isOpen={drawerOpen}
        AuthModel={AuthModel}
      />
      <AppBar
        position="fixed"
        style={{
          height: 60,
          backgroundColor: "#fff  ",
        }}
        elevation={trigger ? 3 : 0}
      >
        <Container maxWidth="inherit">
          <Toolbar style={{ minHeight: 60 }}>
            <div style={{ width: '100%' }}>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="space-between"
                alignItems="center"
                alignContent="center"
              >
                <Grid item>
                  <Hidden mdUp>
                    <IconButton
                      aria-label="openNav"
                      onClick={() => setDrawerOpen(true)}
                    >
                      <MenuIcon />
                      <Typography variant={"h6"} className={classes.logoText}>
                        FreeOSenior
                      </Typography>
                    </IconButton>

                  </Hidden>
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
                      css={{
                        flexShrink: 0,
                        flexBasis: "calc(100% / 10)",
                      }}
                      className={classes.logoBox}
                    >
                      <Hidden smDown>
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
                      </Hidden>


                    </Box>
                  </Link>
                </Grid>

                <Grid item>
                  <Hidden smDown>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/home"
                    >
                      <Typography variant={"subtitle"}>Home</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/tutorials"
                    >
                      <Typography variant={"subtitle"}>Tutorials</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/projectNotes"
                    >
                      <Typography variant={"subtitle"}>Project/Notes</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/askAQuery"
                    >
                      <Typography variant={"subtitle"}>Ask A Query</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/joinUs"
                    >
                      <Typography variant={"subtitle"}>Join Us</Typography>
                    </Link>
                  </Hidden>
                </Grid>

                <Grid item>
                  <Hidden smDown>
                    <AuthModel />
                  </Hidden>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar