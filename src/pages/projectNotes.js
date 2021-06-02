import React, { useState, useEffect } from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import { NoteCard } from "../components/all/landing/NoteCard"
import Grid from "@material-ui/core/Grid"
import image from "../images/testchemistry.jpg"
import Typography from "@material-ui/core/Typography"
import { Divider } from "@material-ui/core"
import axiosFetch from "../utils/axiosFetch"

export default function ProjectNotes() {
  const [cards, setcards] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/projectcard")

        if (res.data) {
          console.log(res.data)
          setcards(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.error)
      }
    }
    fetchdata()
  }, [])

  return (
    <Layout>
      <Hidden>
        <br />
        {/* <Typography variant="h1" component="h2" gutterBottom>
          Projects/Notes
        </Typography> */}
        <br />

        <br />
        <Typography variant="h1" component="h2" gutterBottom>
          Projects
        </Typography>
        <Divider />
        <br />
        <Grid container spacing={5}>
          {cards.map(card =>
            card.isProject ? (
              <Grid item xs={12} sm={6}>
                <NoteCard
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
          {cards.map(card =>
            !card.isProject ? (
              <Grid item xs={12} sm={6}>
                <NoteCard
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
      </Hidden>
    </Layout>
  )
}
