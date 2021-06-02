import React, { useEffect, useState } from "react"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import axiosFetch from "../../utils/axiosFetch"
import {
  Button,
  Container,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import Icon from "@material-ui/core/Icon"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Grid from "@material-ui/core/Grid"
import UpdateIcon from "@material-ui/icons/Update"
import CreateIcon from "@material-ui/icons/Create"

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

export default function NewTutData({ tutorial, setReload = f => f, reload }) {
  
  const [data, setData] = useState({
      title:'',
      link:'',
      category:''
  })

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const createData = async event => {
    try {
      const res = await axiosFetch.post(`api/tutorial`, data)
      if (res.data) {
        window.alert("created")
        console.log(res.data)
        setReload(!reload);
        setData({
          title: "",
          link: "",
          category: "",
        })
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  const state = useSelector(({ auth }) => auth)
  const classes = useStyles();

  return (
    <TableRow>
      {/* <td>{event._id}</td> */}
      <TableCell className={classes.tableContent}>
        {" "}
        <TextField
          id="outlined-basic"
          
          value={data.title}
          name="title"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />{" "}
      </TableCell>
      <TableCell>
        <TextField
          id="outlined-basic"
          
          value={data.link}
          name="link"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </TableCell>
      <TableCell className={classes.tableContent}>
        {" "}
        <TextField
          id="outlined-basic"
          value={data.category}
          name="category"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />{" "}
      </TableCell>

      {state.isLoggedin && (
        <TableCell>
          
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CreateIcon/>}
              onClick={createData}
             
            >
             create
            </Button>
          
        </TableCell>
      )}
      
    </TableRow>
  )
}
