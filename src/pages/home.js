import React from "react"
import Layout from "./../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"

import Frame1 from "./../components/all/landing/Frame1"
import Frame2 from "./../components/all/landing/Frame2"
import Frame3 from "./../components/all/landing/Frame3"
import Frame4 from "./../components/all/landing/Frame4"
import Frame5 from "../components/all/landing/Frame5"

import Mobile from "./../components/mobile/landing"

import { chosenTheme } from "../../theme";
import { ThemeProvider } from "styled-components";


export default function Home() {

  return (
    <Layout>
      <ThemeProvider theme={chosenTheme}>
        <Hidden smDown>
          <Frame1 theme={chosenTheme}/>
          <Frame2 theme={chosenTheme}/>
          <Frame3 theme={chosenTheme}/>
          <Grid container >
            <Grid item md={8}>
          <Frame4 />
          </Grid>
          <Grid item md={4}>
          <Frame5 />
          </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Mobile.Frame1/>
          <Mobile.Frame2/>
          <Mobile.Frame3/>
        </Hidden>
      </ThemeProvider>
    </Layout>
  )
}
