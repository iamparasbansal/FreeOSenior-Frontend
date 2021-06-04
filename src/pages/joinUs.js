import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    padding: "50px 70px 50px 50px",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
  },
  button: {
    background: "linear-gradient(45deg, #af58f5 30%, #901af0  90%)",
    boxShadow: "0 3px 5px 2px rgba(181, 99, 247, .3)",
    color: "white",
    borderRadius: 3,
    height: 48,
    padding: "0 20px",
  },
  roote: {
    display: "flex",
    flexWrap: "wrap",
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <Hidden>
        {/* <Typography
          variant="h1"
          style={{ fontWeight: 500, fontFamily: "serif" }}
        >
          Join Us
        </Typography>
        <Divider /> */}
        <br />
        <br />
        <Container maxWidth="sm">
          <Paper elevation={4} className={classes.paper}>
            <Typography
              variant="h1"
              style={{ fontWeight: 300, fontFamily: "serif" }}
            >
              Join Us
            </Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                />
                <TextField
                  required
                  id="filled-required"
                  label="Last Name"
                  placeholder="Last Name"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Branch"
                  placeholder="Branch"
                  variant="outlined"
                />
                <TextField
                  required
                  id="filled-required"
                  label="Semester"
                  placeholder="Semester"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="standard-full-width"
                  label="Label"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  helperText="Full width!"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="None"
                  id="margin-none"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                />
                <TextField
                  label="Dense"
                  id="margin-dense"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="dense"
                />
                <TextField
                  label="Normal"
                  id="margin-normal"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="normal"
                />
              </div>
              <div className={classes.roote}>
                <div>
                  <TextField
                    id="standard-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>

              <Grid container alignItems="center" justify="center">
                <Button
                  variant="contained"
                  startIcon={<SendIcon />}
                  className={classes.button}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Hidden>
    </Layout>
  )
}
