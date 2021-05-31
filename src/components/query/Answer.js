import React from "react"
import { Divider, Avatar, Grid, Paper } from "@material-ui/core"

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

const Answer = ({ data={
  author:{
    firstname:'demo',
    lastname:'demo',
  },
  desc:"demo",
  votes:[],
}} ) => {
  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>
            {data?.author?.firstname} {data?.author?.lastname}
          </h4>
          <p style={{ textAlign: "left" }}>
            {data.desc}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {data.votes.length}
          </p>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Answer
