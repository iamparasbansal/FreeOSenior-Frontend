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
import TutData from "./TutData"
import NewTutData from "./newTutData"

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
  const [reload, setReload] = useState(true);

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
  }, [reload])

  if (created) {
    window.location.reload()
  }
  return (
    <>
      <Typography variant="h1">Tutorial Table</Typography>
      <Divider />
      <br />
      <br />
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tablehead}>TITLE</TableCell>
                <TableCell className={classes.tablehead}>LINK</TableCell>
                <TableCell className={classes.tablehead}>CATEGORY</TableCell>
                {state.isLoggedin && (
                  <TableCell className={classes.tablehead}>UPDATE</TableCell>
                )}
                {state.isLoggedin && (
                  <TableCell className={classes.tablehead}>DELETE</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tutorials.map(event => {
                return (
                  <TutData
                    setReload={setReload}
                    reload={reload}
                    tutorial={event}
                  />
                )
              })}
              {state.isLoggedin && state.admin && (
                <NewTutData setReload={setReload} reload={reload} />
              )}
            </TableBody>
          </Table>
          <Grid
            container
            alignContents="center"
            alignItems="center"
            justify="center"
          ></Grid>
        </TableContainer>
      </Container>
    </>
  )
}

export default TurtorialTable;
