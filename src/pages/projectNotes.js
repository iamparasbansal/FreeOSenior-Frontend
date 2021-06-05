import React, { useState, useEffect } from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import { NoteCard } from "../components/all/landing/NoteCard"
import Grid from "@material-ui/core/Grid"

import Typography from "@material-ui/core/Typography"
import { Divider } from "@material-ui/core"
import axiosFetch from "../utils/axiosFetch"
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
export default function ProjectNotes() {
  const [cards, setcards] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/projectcard")

        if (res.data) {
          setcards(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error)
        console.log(error?.response?.data?.error)
      }
    }
    trackPromise(fetchdata())
  }, [])

  return (
    <Layout>
      <Hidden>
        <div style={{ marginBottom: 20 }}>
          <br />
          <Typography variant="h1" component="h2" gutterBottom>
            Projects
          </Typography>
          <Divider />
          <br />
          <Grid container spacing={5}>
            <LoadingIndicator />
            {cards
              .sort(function (a, b) {
                return a.sem - b.sem
              })
              .map(card =>
                card.isProject ? (
                  <Grid item xs={12} sm={6} data-aos="zoom-in">
                    <NoteCard
                      key={card._id}
                      title={card.title}
                      sem={card.sem}
                      dlink={card.dlink}
                      desc={card.desc}
                      imglink={card.imglink}
                    />
                  </Grid>
                ) : (
                  <div></div>
                )
              )}
          </Grid>

          <br />
          <Typography variant="h1" component="h2" gutterBottom>
            Notes
          </Typography>
          <br />
          <Divider />
          <br />

          <Grid container spacing={5}>
            <LoadingIndicator />
            {cards
              .sort(function (a, b) {
                return a.sem - b.sem
              })
              .map(card =>
                !card.isProject ? (
                  <Grid item xs={12} sm={6} data-aos="zoom-in">
                    <NoteCard
                      key={card._id}
                      title={card.title}
                      sem={card.sem}
                      dlink={card.dlink}
                      desc={card.desc}
                      imglink={card.imglink}
                    />
                  </Grid>
                ) : (
                  <div></div>
                )
              )}
          </Grid>
        </div>
      </Hidden>
      <KommunicateChat />
    </Layout>
  )
}
