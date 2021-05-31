import React from "react"
import { Divider, Avatar, Grid, Paper, TextField, Button, ButtonGroup } from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
const Answer = ({ data={
  author:{
    firstname:'demo',
    lastname:'demo',
  },
  desc:"demo",
  votes:[],
}} ) => {
  return (
    <>
      <Divider variant="inset" />
      <Grid container wrap="nowrap" spacing={2} style={{ margin: "20px" }}>
        <Grid item>
          <Avatar>{data.author.firstname.slice(0, 1)}</Avatar>
        </Grid>

        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>
            {data?.author?.firstname} {data?.author?.lastname}
          </h4>
          <TextField
            id="outlined-basic"
            disabled
            value={data.desc}
            variant="outlined"
            fullWidth
          />
          <p style={{ textAlign: "left", color: "gray" }}>
            {data.votes.length}
          </p>
        </Grid>

        <Grid item>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
          >
            <Button>
              <ThumbUpIcon />
            </Button>
            <Button disabled>
                {
                    data.votes.length
                }
            </Button>
            <Button>
              <ThumbDownIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  )
}

export default Answer
