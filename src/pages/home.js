import React from "react"
import Layout from "./../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"

import Frame1 from "./../components/all/landing/Frame1"
import Frame2 from "./../components/all/landing/Frame2"
import Frame3 from "./../components/all/landing/Frame3"
import Frame4 from "./../components/all/landing/Frame4"
import Frame5 from "../components/all/landing/Frame5"
import Frame6 from "../components/all/landing/Frame6"

import Mobile from "./../components/mobile/landing"

import { chosenTheme } from "../../theme"
import { ThemeProvider } from "styled-components"

export default function Home() {
  return (
    <Layout>
      <ThemeProvider theme={chosenTheme}>
        <Hidden smDown>
          <Frame1 theme={chosenTheme} />
          <Frame2 theme={chosenTheme} />
          <Frame3 theme={chosenTheme} />
        </Hidden>
        <Hidden mdUp>
          <Mobile.Frame1 />
          <Mobile.Frame2 />
          <Mobile.Frame3 />
        </Hidden>
        <Frame4 theme={chosenTheme} />
        <Grid container>
          <Grid item md={8}>
            <Frame5 />
          </Grid>
          <Grid item md={4}>
            <Frame6 />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Layout>
  )
}
