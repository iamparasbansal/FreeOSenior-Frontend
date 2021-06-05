import React, { useEffect, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Contributor from "./contributor"
import axiosFetch from "../../../utils/axiosFetch"
import Grid from "@material-ui/core/Grid"
import { EventCard } from "./eventcard"

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
  },
  contributor: {
    borderStyle: "hidden",
    borderRadius: 30,
    backgroundColor: "#91ede5",
    margin: 5,
    color: "#1a1de8",
    fontWeight: 200,
  },
  event: {
    textAlign: "left",
    fontSize: 40,
    fontFamily: "cursive",
    margin: 20,
    color: "violet",
  },
})

export default function Frame6() {
  const styles = useStyles()

  const [contributors, setcontributors] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/contributor")

        if (res.data) {
          
          setcontributors(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error)
console.log(error?.response?.data?.error)
      }
    }
    fetchdata()
  }, [])

  const [events, setevents] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/event")

        if (res.data) {
          
          setevents(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error)
console.log(error?.response?.data?.error)
      }
    }
    fetchdata()
  }, [])

  return (
    <Container className={styles.root}>
      <Grid container direction="row">
        <Grid item>
          <Typography
            variant="h1"
            component="h2"
            style={{ textAlign: "center", fontSize: 30, margin: 20 }}
          >
            Top Contributors
          </Typography>
          <Divider />
          <br />
          <List>
            {contributors
              .sort(function (a, b) {
                return b.count - a.count
              })
              .map(contributor => (
                <Contributor
                  name={contributor.user.firstname}
                  count={contributor.count}
                  key={contributor._id}
                />
              ))}
          </List>
        </Grid>

        <Grid item>
          <Typography variant="h1" component="h2" className={styles.event}>
            Popular Events
          </Typography>
          <Divider />

          <Grid container direction="column">
            {events.map(event => (
              <Grid item key={`${event._id}grid`}>
                <EventCard
                  key={event._id}
                  img={event.img}
                  link={event.link}
                  title={event.title}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
