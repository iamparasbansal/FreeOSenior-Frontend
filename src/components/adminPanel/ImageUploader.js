import React, { useState } from 'react';

import axiosFetch from "../../utils/axiosFetch"
import { Button, Input, makeStyles, TextField } from "@material-ui/core"
import { useSelector } from "react-redux"
import CreateIcon from "@material-ui/icons/Create"

const useStyles = makeStyles(theme => ({
  
  button: {
    margin: theme.spacing(1),
  }
}))

const ImageUploader = () => {

    const [Data, setData] = useState(undefined);
    const [imgUrl, setimgUrl] = useState("");

     const uploadImage = async event => {
       const files = event.target.files
       await setData(files[0])
     }

    const CloudnarySubmit = async (event) => {
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
        setimgUrl(file.secure_url);
        
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <>
        <TextField
          id="outlined-basic"
          value={imgUrl}
          name=""
          disabled={true}
          variant="outlined"
          fullWidth
        />

        <Input type="file" name="file" placeholder="upload image" onChange={uploadImage} />
        <Button onClick={CloudnarySubmit}>Upload</Button>
      </>
    )
}

export default ImageUploader;
