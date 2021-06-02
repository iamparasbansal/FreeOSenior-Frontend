import React, { useEffect, useState } from "react"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import axiosFetch from "../../utils/axiosFetch"
import { Button, makeStyles } from "@material-ui/core"
import { useSelector } from "react-redux"
import Typography from "typography"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})
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
        window.alert("delted")
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
      <Typography>Tutorial Table</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>link</TableCell>
              <TableCell>category</TableCell>
              {state.isLoggedin && <TableCell>update</TableCell>}
              {state.isLoggedin && <TableCell>delete</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {tutorials.map(event => {
              return (
                <TableRow>
                  {/* <td>{event._id}</td> */}
                  <TableCell>{event.title} </TableCell>
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
                  <TableCell>{event.category} </TableCell>

                  {state.isLoggedin && (
                    <TableCell>
                      <Button>update</Button>
                    </TableCell>
                  )}
                  {state.isLoggedin && (
                    <TableCell>
                      <Button onClick={DeleteEvent} value={event._id}>
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

        {state.isLoggedin && <Button>Create tutorials</Button>}
      </TableContainer>
    </>
  )
}

export default TurtorialTable;
