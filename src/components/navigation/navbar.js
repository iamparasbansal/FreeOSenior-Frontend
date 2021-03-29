import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Logo from "./../../images/logo_transparent_l.png"
import * as HeaderStyles from "./header.module.scss"
import Container from "@material-ui/core/Container"
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
    fontSize: "0.85rem",
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
    marginTop: 5,
    color: "#1C3B6B",
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    threshold: 30,
    disableHysteresis: true,
  })
  return (
    <div className={HeaderStyles.main}>
      <AppBar
        position="fixed"
        style={{
          height: 60,
          backgroundColor: "#F4F6FB",
        }}
        elevation={trigger ? 3 : 0}
      >
        <Container maxWidth="lg">
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
                  <Link
                    to="/Home"
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
                          alt={"freeOSenior logo"}
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
                      to="/Home"
                    >
                      <Typography variant={"subtitle"}>Home</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/Tutorials"
                    >
                      <Typography variant={"subtitle"}>Tutorials</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/ProjectNotes"
                    >
                      <Typography variant={"subtitle"}>Projects/Notes</Typography>
                    </Link>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/ContactUs"
                    >
                      <Typography variant={"subtitle"}>Contact</Typography>
                    </Link>
                    {/* <Link
                  className={classes.navItem}
                  activeClassName={classes.activeNavItem}
                  to="/careers"
                >
                  <Typography variant={"subtitle"}>Careers</Typography>
                </Link> */}
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