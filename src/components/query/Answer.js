import React, { useState } from "react"
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  ButtonGroup,
  Container,
} from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import { useSelector } from "react-redux"
import axiosFetch from "../../utils/axiosFetch"
import { mergeClasses } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"
import InputBase from "@material-ui/core/InputBase"

const useStyles = makeStyles({
  paper: {
    padding: "40px 20px",
    borderRadius: 20,
    margin: "20px",
  },
  root: {
    borderRadius: 30,
  },
  title: {
    fontFamily: "serif",
    fontSize: "15px",
  },
  textfield: {
    margin: "20px auto",
    borderRadius: 20,
  },
  success: {
    background: "linear-gradient(45deg, #99f0b8 30%, #6df765  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
  danger: {
    background: "linear-gradient(45deg, #f57a7a 30%, #ed1f1f  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
  comment: {
    marginTop: 10,
    height: "auto",
    fontSize: "20px",
    fontWeight: 500,
  },
})

const Answer = ({
  data = {
    _id: "",
    author: {
      firstname: "demo",
      lastname: "demo",
    },
    desc: "demo",
    votes: [],
  },
  qid,
  setReload = f => f,
  reload,
}) => {
  const classes = useStyles()
  const state = useSelector(({ auth }) => auth)
  const [disabled, setDisabled] = useState(true)
  const [desc, setDesc] = useState(data.desc)

  const votecnt =
    data.votes.filter(vote => vote.vote === true).length -
    data.votes.filter(vote => vote.vote === false).length

  const votes = data.votes
  const userId = state.isLoggedin ? state.userId : null

  const hasVoted = userId => {
    return votes?.find(vote => {
      return vote.user === userId
    })
  }
  const vote = hasVoted(userId)?.vote

  const postVote = async (vote, rid) => {
    try {
      const res = await axiosFetch.post(`api/votecomment/${qid}/${rid}`, {
        vote,
      })
      if (res.data) {
        console.log(res.data)
        window.alert("voted")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error?.response?.data?.error)
    }
  }

  const deleteReply = async event => {
    event.preventDefault()
    console.log(qid)
    console.log(data._id)

    try {
      const res = await axiosFetch.delete(
        `api/deletecomment/${qid}/${data._id}`
      )
      if (res.data) {
        console.log(res.data)
        window.alert("success deleted")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error?.response?.data?.error)
    }
  }

  const UpdateReply = async event => {
    event.preventDefault()
    console.log("qid")
    console.log(qid)
    console.log(data._id)

    try {
      const res = await axiosFetch.put(`api/updatecomment/${qid}/${data._id}`, {
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

  return (
    <>
      <Divider />
      <Paper elevation="5" className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{data.author.firstname.slice(0, 1)}</Avatar>
          </Grid>

          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 className={classes.title}>
              {data?.author?.firstname} {data?.author?.lastname}
            </h4>
            <Container maxWidth="xs">
              <InputBase
                // id="outlined-basic"
                disabled={disabled}
                value={desc}
                onChange={e => setDesc(e.target.value)}
                //variant="outlined"
                className={classes.comment}
                fullWidth
              />
            </Container>
          </Grid>

          <Grid item>
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical contained primary button group"
              variant="contained"
            >
              <Button
                disabled={!userId || vote === true}
                onClick={() => {
                  postVote("true", data._id)
                }}
                className={classes.success}
                variant="success"
              >
                <ThumbUpIcon />
              </Button>
              <Button disabled>{votecnt}</Button>

              <Button
                disabled={!userId || vote === false}
                onClick={() => postVote("false", data._id)}
                className={classes.danger}
                variant="danger"
              >
                <ThumbDownIcon />
              </Button>
            </ButtonGroup>
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
              {!disabled && <Button onClick={UpdateReply}>update</Button>}
              <Button onClick={deleteReply}>delete</Button>
            </ButtonGroup>
          </Grid>
        )}
      </Paper>
    </>
  )
}

export default Answer
