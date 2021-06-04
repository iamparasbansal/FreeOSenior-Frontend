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

export default function NewData({
  tutorial,
  setReload = f => f,
  reload,
  tableTitles = [],
  baseAPI = "",
  Data={}
}) {
  const [data, setData] = useState(Data);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }
  console.log(data);
  const createData = async event => {
    try {
      const res = await axiosFetch.post(`${baseAPI}`, data)
      if (res.data) {
        window.alert("created")
        console.log(res.data)
        setReload(!reload)
        setData({});
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  const state = useSelector(({ auth }) => auth)
  const classes = useStyles()

  return (
    <TableRow>
      {/* <td>{event._id}</td> */}

      {tableTitles.map((field)=>{
        return (
          <TableCell className={classes.tableContent}>
            {" "}
            <TextField
              id="outlined-basic"
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
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CreateIcon />}
            onClick={createData}
          >
            create
          </Button>
        </TableCell>
      )}
    </TableRow>
  )
}
