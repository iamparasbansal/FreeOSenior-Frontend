import React from 'react';
import { Divider, Avatar, Grid, Paper, TextField, Button, ButtonGroup, Container } from "@material-ui/core"
import Answer from './Answer';
import PostAnswer from './PostAnswer';

const PostQuestion = ({data={
  author:{
    firstname:'demo',
    lastname:'demo',
  },
  title:'demo',
  desc:"demo",
  comments:[],
}}

) => {

  console.log(data);

    return (
      <Container>
        <Paper
          style={{ padding: "40px 20px", margin: "30px auto" }}
          variant="outlined"
        >
          <Grid container wrap="nowrap" spacing={2}>
           
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h2 style={{ margin: 0, textAlign: "left" }}>Ask your Query</h2>
              
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
             
            </Grid>
          </Grid>

          <Grid item>
            <ButtonGroup
              color="primary"
              aria-label="vertical contained primary button group"
              variant="contained"
            >
              <Button>Post your Doubt</Button>
             
            </ButtonGroup>
          </Grid>
        </Paper>
      </Container>
    )
}

export default PostQuestion;
