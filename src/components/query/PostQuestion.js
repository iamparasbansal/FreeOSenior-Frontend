import React, { useState } from 'react';
import {  Grid, Paper, TextField, Button, ButtonGroup, Container, Typography } from "@material-ui/core"

import axiosFetch from '../../utils/axiosFetch';

const PostQuestion = ({ setReload = f => f, reload }) => {
  const [data, setData] = useState({
    desc: "",
    title: "",
    tag: "",
  })

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const postQueston = async () => {
    if (data.desc.trim() === "" || data.title.trim() === "") {
      window.alert("cannot reply may be invalid query or add valid reply")
      return
    }

    try {
      const res = await axiosFetch.post(`api/query`, data)
      if (res.data) {
        console.log(res.data)
        window.alert("your Query is created successfully")
        setReload(!reload)
        setData({
          desc:'',
          title:'',
          tag:''

        })
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  return (
    <Container>
      <Paper elevation="10" style={{ padding: "40px 20px", margin:"20px auto"}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Typography align="center" variant="h2">
              Ask A Query
            </Typography>

            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder="title"
              name="title"
              value={data.title}
              onChange={handleChange}
              style={{ margin: "20px auto" }}
            />

            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder="description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
              style={{ margin: "20px auto" }}
            />

            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              placeholder="tag"
              name="tag"
              value={data.tag}
              onChange={handleChange}
              style={{ margin: "20px auto" }}
            />
          </Grid>
        </Grid>

        <Grid item>
          <ButtonGroup
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
          >
            <Button  onClick={postQueston}>Post your Doubt</Button>
          </ButtonGroup>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PostQuestion;
