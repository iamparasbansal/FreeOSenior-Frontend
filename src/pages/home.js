import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"

import Frame1 from "./../components/all/landing/Frame1"
import Frame2 from "../components/all/landing/Frame2"
import Frame3 from "./../components/all/landing/Frame3"

import Mobile from "./../components/mobile/landing"

export default function Home() {

  return (
    <Layout>
      <Hidden smDown>
        <Frame1 />
        <Frame2 />
        <Frame3/>
      </Hidden>
      <Hidden mdUp>
        <Mobile.Frame1/>
        <Mobile.Frame2/>
        <Mobile.Frame3/>
      </Hidden>
    </Layout>
  )
}
