import React, { useState } from "react"
import {
  Grid,
  Paper,
  TextField,
  Button,
  Container,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import axiosFetch from "../../utils/axiosFetch"
import SendIcon from "@material-ui/icons/Send"
import { useSelector } from "react-redux"
const useStyles = makeStyles({
  root: {
    borderRadius: 30,
  },
  title: {
    fontFamily: "serif",
  },
  textfield: {
    margin: "20px auto",
    borderRadius: 20,
  },
  button: {
    background: "linear-gradient(45deg, #af58f5 30%, #901af0  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
})
const PostQuestion = ({ setReload = f => f, reload }) => {

  const state = useSelector(({ auth }) => auth)
  const classes = useStyles()
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

    if (!state.isLoggedin) {
      window.alert("Please Sign in to continue")
      return
    }
      
    try {
      const res = await axiosFetch.post(`api/query`, data)
      if (res.data) {
       
        window.alert("your Query is created successfully")
        setReload(!reload)
        setData({
          desc: "",
          title: "",
          tag: "",
        })
      }
    } catch (error) {
      console.log(error)
console.log(error?.response?.data?.error)
    }
  }

  return (
    <Container>
      <Paper
        className={classes.root}
        elevation="20"
        style={{ padding: "40px 20px", margin: "20px auto" }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Typography align="center" variant="h2" className={classes.title}>
              Ask A Query
            </Typography>

            <TextField
              label="TITLE"
              id="outlined-size-small"
              variant="outlined"
              fullWidth
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={handleChange}
              className={classes.textfield}
              autoComplete="off"
            />

            <TextField
              label="DESCRIPTON"
              id="outlined-size-small"
              variant="outlined"
              fullWidth
              placeholder="Description"
              name="desc"
              value={data.desc}
              onChange={handleChange}
              className={classes.textfield}
              autoComplete="off"
            />

            <TextField
              label="TAG"
              id="outlined-size-small"
              variant="outlined"
              fullWidth
              placeholder="Tag seperated by commas"
              name="tag"
              value={data.tag}
              onChange={handleChange}
              autoComplete="off"
              className={classes.textfield}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" justify="center">
          <Button
            variant="contained"
            onClick={postQueston}
            className={classes.button}
            endIcon={<SendIcon>Post your Doubt</SendIcon>}
          >
            Post your Doubt
          </Button>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PostQuestion
