import React, { useState } from "react"
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  ButtonGroup,
  Container,
  Typography,
  Chip,
  IconButton,
  Collapse,
} from "@material-ui/core"
import Answer from "./Answer"
import PostAnswer from "./PostAnswer"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import axiosFetch from "../../utils/axiosFetch"

const useStyles = makeStyles({
  root: {
    padding: "40px 20px",
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 20,
  },
  title: {
    fontFamily: "serif",
  },
  textfield: {
    margin: "20px auto",
    broderRadius: 30,
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

const Question = ({
  data = {
    _id: "",
    author: {
      firstname: "demo",
      lastname: "demo",
    },
    title: "demo",
    desc: "demo",
    comments: [],
  },
  setReload = f => f,
  reload,
}) => {
  const classes = useStyles()
  const [disabled, setDisabled] = useState(true)
  const [desc, setDesc] = useState(data.desc)

  const deleteQuestion = async event => {
    event.preventDefault()
    console.log(data._id)
    try {
      const res = await axiosFetch.delete(`api/query/${data._id}`)
      if (res.data) {
        console.log(res.data)
        window.alert("success deleted")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error.response.data.erorr)
    }
  }

  const resolveQuestion = async event => {
    event.preventDefault()
    console.log(data._id)
    try {
      const res = await axiosFetch.get(`api/resolvequery/${data._id}`)
      if (res.data) {
        console.log(res.data)
        window.alert("resolved")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error.response.data.erorr)
    }
  }

  const UpdateQuestion = async event => {
    event.preventDefault()

    console.log(data._id)

    try {
      const res = await axiosFetch.put(`api/query/${data._id}`, {
        desc,
      })
      if (res.data) {
        console.log(res.data)
        window.alert("success updated")
        setDisabled(true)
        setReload(!reload)
      }
    } catch (error) {
      console.log(error.response.data.erorr)
    }
  }

  const state = useSelector(({ auth }) => auth)

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Paper elevation="20" className={classes.root}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>{data.author.firstname.slice(0, 1)}</Avatar>
        </Grid>

        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h3">
            {data.title}

            <Chip
              label={data.isResolved ? "Resolved" : "Not Resolved"}
              
            />
          </Typography>
          <Typography variant="h5">
            {data?.author?.firstname} {data?.author?.lastname}
          </Typography>
          <TextField
            id="outlined-basic"
            disabled={disabled}
            value={desc}
            onChange={e => setDesc(e.target.value)}
            style={{ marginTop: 10, height: "auto" }}
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
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {data.comments.map(d => (
              <Answer
                qid={data._id}
                data={d}
                reload={reload}
                setReload={setReload}
              />
            ))}
            <PostAnswer qid={data._id} reload={reload} setReload={setReload} />
          </Collapse>
        </Grid>
      </Grid>

      {state.isLoggedin && state.userId === data.author._id && (
        <Grid item style={{ margin: 10, alignSelf: "center" }}>
          <ButtonGroup
            color="primary"
            aria-label="large outlined primary button group "
          >
            {disabled && (
              <Button onClick={() => setDisabled(false)}>update</Button>
            )}
            {!disabled && <Button onClick={UpdateQuestion}>update</Button>}
            <Button onClick={resolveQuestion}>mark resolved</Button>
            <Button onClick={deleteQuestion}>delete</Button>
          </ButtonGroup>
        </Grid>
      )}
    </Paper>
  )
}

export default Question
