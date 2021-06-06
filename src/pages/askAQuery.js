import React, { useEffect, useState } from "react"
import Layout from "../components/main/layout"
import { Container, Typography, Divider, Hidden } from "@material-ui/core"
import Question from "../components/query/Question"
import axiosFetch from "../utils/axiosFetch"
import PostQuestion from "../components/query/PostQuestion"
import Grid from "@material-ui/core/Grid"
import { ThemeProvider } from "styled-components"
import { chosenTheme } from "../../theme"
import { makeStyles } from "@material-ui/core/styles"
import SearchQuestion from "../components/query/SearchQuestion"

import { usePromiseTracker } from "react-promise-tracker"
import { trackPromise } from "react-promise-tracker"
import Loader from "react-loader-spinner"
import KommunicateChat from "../chat"
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()
  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#3c2bad" height={100} width={100} />
      </div>
    )
  )
}

// import FilterResults from "react-filter-search"
const useStyles = makeStyles({
  title: {
    fontFamily: "arial",
    fontWeight: 500,
    margin: "20px auto",
  },
})
export default function Home() {
  const classes = useStyles()
  const [queries, setQueries] = useState([])
  const [reload, setReload] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/query")

        if (res.data) {
          setQueries(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error?.response?.data?.error)
      }
    }
    trackPromise(fetchdata())
  }, [reload])
  return (
    <Layout>
      <ThemeProvider theme={chosenTheme}>
        <center>
          <Typography className={classes.title} align="center" variant="h1">
            Query Section
          </Typography>
        </center>
        <Divider />
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Hidden mdUp>
              <Grid item xs={12} md={7}>
                <PostQuestion
                  data-aos="zoom-in"
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
                <SearchQuestion
                  search={search}
                  setSearch={setSearch}
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
              {" "}
              <LoadingIndicator />
              {queries.length > 0 ? (
                queries
                  .sort(value => {
                    return value.isResolved ? 1 : -1
                  })
                  .filter(data => {
                    return (
                      data.desc.toLowerCase().includes(search.toLowerCase()) ||
                      data.title.toLowerCase().includes(search.toLowerCase()) ||
                      data.tag.toLowerCase().includes(search.toLowerCase())
                    )
                  })
                  .map(data => (
                    <div data-aos="zoom-in">
                      <Question
                        key={data._id}
                        data={data}
                        reload={reload}
                        setReload={setReload}
                        theme={chosenTheme}
                      />
                    </div>
                  ))
              ) : (
                <></>
              )}
            </Grid>

            <Hidden smDown>
              <Grid item xs={12} md={5}>
                <SearchQuestion
                  data-aos="zoom-in"
                  search={search}
                  setSearch={setSearch}
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
                <PostQuestion
                  data-aos="zoom-in"
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </ThemeProvider>
      <br />
      <br />
      <KommunicateChat />
    </Layout>
  )
}
