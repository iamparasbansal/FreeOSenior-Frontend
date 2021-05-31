import React from "react"
import ReactDOM from "react-dom"
import Hidden from "@material-ui/core/Hidden"
import Layout from "../components/main/layout"
import { Divider, Avatar, Grid, Paper } from "@material-ui/core"
import Question from "../components/query/question"

const imgLink =  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
export default function Home() {
  return (
    <Layout>
      <Hidden smDown>
        <h1>FreeOSenior Ask A Query</h1>
        <Question/>
        <Question/>
      
      </Hidden>
    </Layout>
  )
}
