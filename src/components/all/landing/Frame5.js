import React, { useEffect, useState } from "react"
// import Layout from "../../../components/main/layout"
// import Hidden from "@material-ui/core/Hidden"
import { WorkshopCard } from "../landing/WorkshopCard"
import Grid from "@material-ui/core/Grid"
// import { Divider, Paper } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import axiosFetch from "../../../utils/axiosFetch"
import { usePromiseTracker } from "react-promise-tracker"
import { trackPromise } from "react-promise-tracker"
import Loader from "react-loader-spinner"
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
        <Loader type="TailSpin" color="#3c2bad" height={100} width={100} />
      </div>
    )
  )
}
export default function Frame5() {
  const [workshops, setworkshops] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/workshop")

        if (res.data) {
          setworkshops(res.data)
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
    <Container>
      <div style={{ marginBottom: 30 }}>
        <Grid container direction={"column"}>
          <LoadingIndicator />
          {workshops.map(workshop => (
            <Grid
              item
              key={`${workshop._id}grid`}
              style={{ margin: "20px auto", width: "100%" }}
            >
              <WorkshopCard
                title={workshop.title}
                author={workshop.author}
                imglink={workshop.imglink}
                desc={workshop.desc}
                date={workshop.date}
                key={workshop._id}
              />
            </Grid>
          ))}
          <br />
        </Grid>
      </div>
    </Container>
  )
}
