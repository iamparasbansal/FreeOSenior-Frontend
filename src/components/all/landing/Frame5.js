import React, { useEffect, useState } from "react"
// import Layout from "../../../components/main/layout"
// import Hidden from "@material-ui/core/Hidden"
import { WorkshopCard } from "../landing/WorkshopCard";
import Grid from "@material-ui/core/Grid"
// import { Divider, Paper } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import axiosFetch from "../../../utils/axiosFetch"

export default function Frame5() 
{

  const [workshops, setworkshops] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/workshop")

        if (res.data) {
          console.log(res.data)
          setworkshops(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.error)
      }
    }
    fetchdata()
  }, [])

  return (
    <Container  >
      <div style={{ marginBottom: 30 }}>
        <Grid container direction={"column"} spacing={0} >
          {workshops.map(workshop => (
            <Grid item >
              <WorkshopCard
                title={workshop.title}
                author={workshop.author}
                imglink={workshop.imglink}
              />
            </Grid>
          ))}
          <br />
        </Grid>
      </div>
    </Container>
  )
}
