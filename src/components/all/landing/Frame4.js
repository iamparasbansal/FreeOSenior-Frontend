import React, { useEffect, useState } from "react"
// import Layout from "../../../components/main/layout"
// import Hidden from "@material-ui/core/Hidden"
import { WorkshopCard } from "../landing/WorkshopCard";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
// import { Divider, Paper } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import axiosFetch from "../../../utils/axiosFetch"

export default function Frame4() 
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
    
        <Container>
        <Typography variant="h1" component="h2" style={{textAlign:"left", fontSize:60}}>
          Upcomming Workshops
        </Typography>
        
        <br />
        <Container maxWidth="fixed">
          <div style={{ marginBottom: 30 }}>
            <Grid container direction={"column"} spacing={0} >
              {workshops.map(workshop => (
                <Grid item >
                  <WorkshopCard
                    title={workshop.title}
                    author={workshop.author}
                    imglink={workshop.imglink}
                    desc={workshop.desc}
                    date={workshop.date}
                    time={workshop.time}
                  />
                </Grid>
              ))}
              <br />
            </Grid>
          </div>
        </Container>
     </Container>
  )
}

