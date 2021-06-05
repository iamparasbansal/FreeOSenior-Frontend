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
    fetchdata()
  }, [reload])
  return (
    <Layout>
      <ThemeProvider theme={chosenTheme}>
        <center>
          <Typography className={classes.title} align="center" variant="h1">
            Ask A Query
          </Typography>
        </center>
        <Divider />
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Hidden mdUp>
              <Grid item xs={12} md={7}>
                <PostQuestion
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
              {" "}
              {queries.length > 0 ? (
                queries
                  .sort(value => {
                    return value.isResolved ? 1 : -1
                  })
                  .map(data => (
                    <Question
                      key={data._id}
                      data={data}
                      reload={reload}
                      setReload={setReload}
                      theme={chosenTheme}
                    />
                  ))
              ) : (
                <Question
                  theme={chosenTheme}
                  reload={reload}
                  setReload={setReload}
                />
              )}
            </Grid>

            <Hidden mdDown>
              <Grid item xs={12} md={5}>
                <PostQuestion
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
    </Layout>
  )
}
