import React from "react"
import { Paper, Grid, Typography, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import * as AllStyles from "../../styles/all.module.scss"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"

const links1 = [
  {
    title: "Tutorials",
    link: "/tutorials",
  },
  // {
  //   title: "Reviews",
  //   link: "/reviews",
  // },
  {
    title: "FAQs",
    link: "/faqs",
  },
  // {
  //   title: "Product Tour",
  //   link: "/product-tour",
  // },
  // {
  //   title: "Register With Us",
  //   link: "/register",
  // },
]

const links2 = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Project/Notes",
    link: "/projectNotes",
  },
  // {
  //   title: "Blog",
  //   link: "/blog",
  // },
  {
    title: "Ask A Query",
    link: "/askAQuery",
  },

  {
    title: "Join Us",
    link: "/joinUs",
  },
]

const links3 = [
  {
    title: "Terms",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  
]

const useStyles = makeStyles(theme => ({
  dividerColor: {
    backgroundColor: "#2b2b2b",
  },
  innerPaper: {
    backgroundColor: "#2b2b2b",
    color: "#fff",
    padding: "50px 100px",
    margin: "0",
    maxWidth:"inherit",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      boxShadow: "none",
    },
  },
  centerMobile: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container component={Paper} className={classes.innerPaper}>
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item xs={false} md={4}>
            <Typography variant="h5">FreeOSenior</Typography>
            <Typography style={{ fontSize: 15 }}>
              © FreeOSenior.com
            </Typography>
            <Typography style={{ fontSize: 15 }}>
              All rights reserved
            </Typography>
          </Grid>
        </Hidden>

        <Grid item xs={4} md={2}>
          <div className={AllStyles.footerText}>Product</div>
          {links1.map((i, index) => (
            <Link className={AllStyles.footerLinks} key={index} to={i.link}>
              {i.title}
            </Link>
          ))}
        </Grid>
        <Grid item xs={4} md={2}>
          <div className={AllStyles.footerText}>Company</div>
          {links2.map(i => (
            <Link className={AllStyles.footerLinks} to={i.link}>
              {i.title}
            </Link>
          ))}
        </Grid>
        <Grid item xs={4} md={2}>
          <div className={AllStyles.footerText}>Legal</div>
          {links3.map(i => (
            <Link className={AllStyles.footerLinks} to={i.link}>
              {i.title}
            </Link>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          justify="center"
          className={classes.centerMobile}
        >
          <div className={AllStyles.footerText}>Follow Us</div>
          <a
            style={{ display: "inline" }}
            className={AllStyles.footerLinks}
            href="https://www.youtube.com/channel/UCLg7o65gW4HkKlwg3tGueeA"
          >
            <YouTubeIcon style={{ color: "inherit", fontSize: 35 }} />
          </a>
          <a
            style={{ display: "inline" }}
            className={AllStyles.footerLinks}
            href="https://m.facebook.com/"
          >
            <FacebookIcon style={{ color: "inherit", fontSize: 35 }} />
          </a>
          <a
            style={{ display: "inline" }}
            className={AllStyles.footerLinks}
            href="https://www.linkedin.com/"
          >
            <LinkedInIcon style={{ color: "inherit", fontSize: 35 }} />
          </a>
          <a
            style={{ display: "inline" }}
            className={AllStyles.footerLinks}
            href="https://www.instagram.com/"
          >
            <InstagramIcon style={{ color: "inherit", fontSize: 35 }} />
          </a>
        </Grid>
        <Hidden mdUp>
          <Grid xs={12} md={1}>
            <Typography
              style={{ fontSize: 15 }}
              className={classes.centerMobile}
            >
              © 2020 FreeOSenior.com
            </Typography>
            <Typography
              style={{ fontSize: 15 }}
              className={classes.centerMobile}
            >
              All rights reserved
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default Footer