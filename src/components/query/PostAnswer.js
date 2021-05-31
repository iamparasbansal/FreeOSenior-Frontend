import React from "react"
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
const PostAnswer = ({
  data = {
    author: {
      firstname: "demo",
      lastname: "demo",
    },
    desc: "demo",
    votes: [],
  },
}) => {
  return (
    <>
      <Divider variant="inset" />

      <Grid container wrap="nowrap" spacing={2} style={{ margin: "20px" }}>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h2 style={{ margin: 0, textAlign: "left" }}>your answer</h2>
          <TextField id="outlined-basic" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <ButtonGroup
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>Post the data</Button>
      </ButtonGroup>
    </>
  )
}

export default PostAnswer
