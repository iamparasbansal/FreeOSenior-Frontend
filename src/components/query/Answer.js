import React, { useState } from "react"
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  Button,
  ButtonGroup,
  Container,
  Chip
} from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import { useSelector } from "react-redux"
import axiosFetch from "../../utils/axiosFetch"
import { makeStyles } from "@material-ui/core/styles"
import InputBase from "@material-ui/core/InputBase"
import DeleteIcon from "@material-ui/icons/Delete"
import UpdateIcon from "@material-ui/icons/Update"

const useStyles = makeStyles({
  paper: {
    padding: "20px 20px",
  },
  root: {
    borderRadius: 30,
  },
  title: {
    fontFamily: "cursive",
    fontSize: "18px",
    fontWeight: 400,
    color: "#4287f5",
    marginTop: 5
  },
  textfield: {
    margin: "20px auto",
    borderRadius: 20,
  },
  success: {
    background: "linear-gradient(45deg, #99f0b8 0%, #6df765  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: "2rem",
    padding: "0 2rem",
  },
  success_faded: {
    background: "linear-gradient(45deg, #99f0b8 100%, #6df765  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: "2rem",
    padding: "0 2rem",
  },
  danger: {
    background: "linear-gradient(45deg, #f57a7a 0%, #ed1f1f  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: "2rem",
    padding: "0 2rem",
  },
  danger_faded: {
    background: "linear-gradient(45deg, #f57a7a 100%, #ed1f1f  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: "2rem",
    padding: "0 2rem",
  },
  comment: {
    height: "auto",
    fontSize: "1.2rem",
    fontWeight: 500,
    marginTop: -10
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

      if (!state.isLoggedin) {
        window.alert("Please Sign in to continue")
        return
      }
      
      const res = await axiosFetch.post(`api/votecomment/${qid}/${rid}`, {
        vote,
      })
      if (res.data) {
        
        window.alert("voted")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error)
console.log(error?.response?.data?.error)
    }
  }

  const deleteReply = async event => {
    
    event.preventDefault()
   
    if (!state.isLoggedin) {
      window.alert("Please Sign in to continue")
      return
    }
      
    try {
      const res = await axiosFetch.delete(
        `api/deletecomment/${qid}/${data._id}`
      )
      if (res.data) {
      
        window.alert("success deleted")
        setReload(!reload)
      }
    } catch (error) {
      console.log(error)
console.log(error?.response?.data?.error)
    }
  }

  const UpdateReply = async event => {
    event.preventDefault()
  
    if (!state.isLoggedin) {
      window.alert("Please Sign in to continue")
      return
    }
      
    try {
      const res = await axiosFetch.put(`api/updatecomment/${qid}/${data._id}`, {
        desc,
      })
      if (res.data) {
       
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
      <Paper elevation="0" className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{data.author.firstname.slice(0, 1).toUpperCase()}</Avatar>
          </Grid>

          <Grid justifyContent="left" item xs zeroMinWidth>
            <h3 className={classes.title}>
              {data?.author?.firstname} {data?.author?.lastname}
              {state.isLoggedin && state.userId === data.author._id && 
                <Chip
               style= {{marginLeft: 5}}
              label={"Author"}
            />
              }
            </h3>
            <Container maxWidth="xs">
              <InputBase
                id="outlined-basic"
                disabled={disabled}
                multiline={true}
                value={desc}
                onChange={e => setDesc(e.target.value)}
                variant="outlined"
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
                onClick={() => {
                  if (vote === true) {
                    postVote(null, data._id)
                  } else {
                    postVote("true", data._id)
                  }
                }}
                className={
                  userId && vote === true
                    ? classes.success_faded
                    : classes.success
                }
                variant="success"
              >
                <ThumbUpIcon />
              </Button>
              <Button disabled>{votecnt}</Button>

              <Button
                onClick={() => {
                  if (vote === false) {
                    postVote(null, data._id)
                  } else {
                    postVote("false", data._id)
                  }
                }}
                className={
                  userId && vote === false
                    ? classes.danger_faded
                    : classes.danger
                }
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
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<UpdateIcon />}
                  onClick={() => setDisabled(false)}
                >
                  update
                </Button>
              )}
              {!disabled && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<UpdateIcon />}
                  onClick={UpdateReply}
                >
                  update
                </Button>
              )}
              <Button
                variant="contained"
                style={{ background: "#e05358" }}
                startIcon={<DeleteIcon />}
                onClick={deleteReply}
              >
                delete
              </Button>
            </ButtonGroup>
          </Grid>
        )}
      </Paper>
    </>
  )
}

export default Answer
