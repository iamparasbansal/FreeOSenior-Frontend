import React from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core"
import Answer from './Answer';

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

const Question = ({data}) => {
    return (
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Unknown</h4>
            <p style={{ textAlign: "left" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis harum minus quas vel? Doloribus sint distinctio, similique nisi odit quos iure vero, doloremque rerum quidem nemo magnam hic placeat.20
            </p>
            
            <Answer/>

          </Grid>
        </Grid>
      </Paper>
    )
}

export default Question;
