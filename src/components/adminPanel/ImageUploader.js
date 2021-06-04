import React, { useState } from "react"
import {
  Container,
  Paper,
  Button,
  makeStyles,
  TextField,
  Grid,
} from "@material-ui/core"
import PublishIcon from "@material-ui/icons/Publish"
import { DropzoneArea } from "material-ui-dropzone"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: "40px 20px",
    margin: "20px auto",
  },
  uploadIn: {
    padding: "40px 20px",
  },
}))

const ImageUploader = () => {
  const classes = useStyles()
  const [Data, setData] = useState(undefined)
  const [imgUrl, setimgUrl] = useState("")

  const uploadImage = async (files) => {
    
    console.log(files[0]);
    await setData(files[0])
  }

  const CloudnarySubmit = async event => {
    event.preventDefault()
    try {
      const data = new FormData()
      await data.append("file", Data)
      data.append("upload_preset", "unknown39825")
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dvhrzmkwd/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json()
      setimgUrl(file.secure_url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container maxWidth="lg">
        <Paper elevation={4} className={classes.paper}>
          <Grid container alignItems="center" justify="center">
            <h1 style={{ fontFamily: "arial", fontSize: 40 }}>
              Image Uploader
            </h1>
          </Grid>
          <TextField
            id="outlined-basic"
            value={imgUrl}
            name=""
            disabled={true}
            variant="outlined"
            fullWidth
          />
          <br />
          <br />
          {/* <Input
            type="file"
            name="file"
            placeholder="upload image"
            onChange={uploadImage}
            className={classes.uploadIn}
          /> */}
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText={"Drag and drop an image here or click"}
            onChange={(files)=>{uploadImage(files)}}
            onAlert={(message, variant) =>
              console.log(`${variant}: ${message}`)
            }
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            startIcon={<PublishIcon />}
            onClick={CloudnarySubmit}
          >
            Upload
          </Button>
        </Paper>
      </Container>
    </>
  )
}

export default ImageUploader
