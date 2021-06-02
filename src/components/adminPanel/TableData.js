import React, { useState } from "react"

import TableCell from "@material-ui/core/TableCell"

import TableRow from "@material-ui/core/TableRow"

import axiosFetch from "../../utils/axiosFetch"
import {
  Button,

  makeStyles,
  TextField,
 
} from "@material-ui/core"
import { useSelector } from "react-redux"

import DeleteIcon from "@material-ui/icons/Delete"

import UpdateIcon from "@material-ui/icons/Update"

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
  tablehead: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "serif",
    textAlign: "center",
  },
  tableContent: {
    fontSize: 15,
    fontFmaily: "arial",
    textAlign: "center",
  },
}))

export default function TableData({
  Data,
  setReload = f => f,
  reload,
  tableTitles = [],
  baseAPI = "",
}) {
  const [disabled, setDisabled] = useState(true)
  const [data, setData] = useState(Data)

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const updateData = async event => {
    try {
      const res = await axiosFetch.put(`${baseAPI}/${data._id}`, data)
      if (res.data) {
        window.alert("updated")
        console.log(res.data)
        setDisabled(true)
        setReload(!reload)
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  const deleteData = async event => {
    try {
      const res = await axiosFetch.delete(`${baseAPI}/${data._id}`)
      if (res.data) {
        window.alert("deleted")
        console.log(res.data)
        setReload(!reload)
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  const state = useSelector(({ auth }) => auth)
  const classes = useStyles()

  return (
    <TableRow>

      {tableTitles.map((field)=>{

        return (
          <TableCell className={classes.tableContent}>
            {" "}
            <TextField
              id="outlined-basic"
              disabled={disabled}
              value={data[field]}
              name={field}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />{" "}
          </TableCell>
        )
      })}
     
      {state.isLoggedin && (
        <TableCell>
          {disabled && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
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
              className={classes.button}
              startIcon={<UpdateIcon />}
              onClick={updateData}
            >
              update
            </Button>
          )}
        </TableCell>
      )}
      {state.isLoggedin && (
        <TableCell>
          <Button
            onClick={deleteData}
            value={data._id}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            {" "}
            Delete{" "}
          </Button>{" "}
        </TableCell>
      )}
    </TableRow>
  )
}
