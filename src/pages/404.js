import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"

export default function Home() {
  return (
    <Layout>
      <Hidden smDown>
        <h1>Error Page</h1>
      </Hidden>
    </Layout>
  )
}