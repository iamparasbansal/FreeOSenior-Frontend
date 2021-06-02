import React, { useEffect, useState } from "react"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import axiosFetch from "../../utils/axiosFetch"
import { Button, Container, Divider, makeStyles, Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
  },
   button: {
    margin: theme.spacing(1),
  },
  tablehead:{
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "serif",
    textAlign: "center",
  },
  tableContent:{
    fontSize: 15,
    fontFmaily:"arial",
    textAlign: "center",
  }
}));
const TurtorialTable = () => {
  const state = useSelector(({ auth }) => auth)
  const classes = useStyles()

  const [tutorials, setTutorials] = useState([])
  const [created, setCreated] = useState(false)

  const DeleteEvent = async event => {
    let id = event.target.value

    try {
      const res = await axiosFetch.delete(`api/tutorial/${id}`)
      if (res.data) {
        window.alert("deleted")
        console.log(res.data)
        await setCreated(true)
      }
    } catch (error) {
      window.alert("unable to delete")
    }
  }

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axiosFetch.get(`api/tutorial`)

        if (res.data) {
          setTutorials(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    dataFetch()
  }, [])

  if (created) {
    window.location.reload()
  }
  return (
    <>
     <Typography variant="h1">Tutorial Table</Typography>
    <Divider/>
    <br/><br/>
      <Container maxWidth="md">
     
     <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablehead}>TITLE</TableCell>
              <TableCell className={classes.tablehead}>LINK</TableCell>
              <TableCell className={classes.tablehead}>CATEGORY</TableCell>
              {state.isLoggedin && <TableCell className={classes.tablehead}>UPDATE</TableCell>}
              {state.isLoggedin && <TableCell className={classes.tablehead}>DELETE</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {tutorials.map(event => {
              return (
                <TableRow>
                  {/* <td>{event._id}</td> */}
                  <TableCell  className={classes.tableContent}>{event.title} </TableCell>
                  <TableCell>
                    <iframe
                      width="200"
                      height="100"
                      src={event.link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </TableCell>
                  <TableCell  className={classes.tableContent}>{event.category} </TableCell>

                  {state.isLoggedin && (
                    <TableCell>
                      <Button variant="contained" color="primary" className={classes.button} startIcon={<UpdateIcon/>}>update</Button>
                    </TableCell>
                  )}
                  {state.isLoggedin && (
                    <TableCell>
                      <Button onClick={DeleteEvent} value={event._id} variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon/>}>
                        {" "}
                        Delete{" "}
                      </Button>{" "}
                    </TableCell>
                  )}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
          <Grid container alignContents="center" alignItems="center" justify="center" >

        {state.isLoggedin && <Button variant="contained" color="primary" className={classes.button} startIcon={<CreateIcon/>}>Create tutorials</Button>}
            </Grid>
      </TableContainer>
      </Container>
    </>
  )
}

export default TurtorialTable;
