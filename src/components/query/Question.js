import React from 'react';
import { Divider, Avatar, Grid, Paper, TextField, Button, ButtonGroup, Container, Typography, Chip } from "@material-ui/core"
import Answer from './Answer';
import PostAnswer from './PostAnswer';
import { useSelector } from 'react-redux';

const Question = ({data={
  author:{
    firstname:'demo',
    lastname:'demo',
  },
  title:'demo',
  desc:"demo",
  comments:[],
}}

) => {

  const state = useSelector(({ auth }) => auth)

    return (
      <Container>
        <Paper elevation="10" style={{ padding: "40px 20px", marginTop: 10 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{data.author.firstname.slice(0, 1)}</Avatar>
            </Grid>

            <Grid justifyContent="left" item xs zeroMinWidth>
              <Typography variant="h3">{data?.title}</Typography>
              <Typography variant="h5">
                {data?.author?.firstname} {data?.author?.lastname}
              </Typography>
              <TextField
                id="outlined-basic"
                disabled
                value={data.desc}
                style={{ marginTop: 10 ,height:'auto'}}
                variant="outlined"
                fullWidth
                
              />
              <Typography variant="h5" style={{ marginTop: 10 }}>
                Tags:
              </Typography>

              <Chip label={data.tag} />

              <Typography variant="h4" style={{ marginTop: 10 }}>
                Comments: {data.comments.length}
              </Typography>

            </Grid>
          </Grid>

          {state.isLoggedin && state.userId == data.author._id && (
            <Grid item style={{ margin: 10, alignSelf: "center" }}>
              <ButtonGroup
                color="primary"
                aria-label="large outlined primary button group "
              >
                <Button>update</Button>
                <Button>mark resolved</Button>
                <Button>delete</Button>
              </ButtonGroup>
            </Grid>
          )}
        </Paper>
      </Container>
    )
}

export default Question;
