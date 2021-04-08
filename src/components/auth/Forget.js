import React, { useState } from "react"
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Axios from "axios"
import EmailIcon from "@material-ui/icons/EmailOutlined"
import InputAdornment from "@material-ui/core/InputAdornment"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  fields: {
    "& input::placeholder": {
      fontSize: "smaller",
    },
    "& label.Mui-focused": {
      color: "#3F51B5",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3F51B5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ACACAC",
      },
      "&:hover fieldset": {
        borderColor: "#ACACAC",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
    },
  },
}))

export default ({
  setSnackbar,
  setSnackColor,
  setSnackbarmsg,
  setTransition,
}) => {
  const classes = useStyles()
  const BASE_URL = "https://api.freeosenior.in"

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState("")

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />
  }

  const onSubmit = async event => {
    if (emailError === true) {
      console.log("Unauthorized Access")
    } else {
      setSnackbar(true)
      setSnackColor("#4CAF50")
      setTransition(() => TransitionDown)
      setSnackbarmsg("Verifying Email Address. Please Wait...")
      const user = {
        email: email,
      }
      try {
        await Axios.post(`${BASE_URL}/api/v1/user/forgot-password`, user, {
          origin: true,
          mode: "cors",
        }).then(res => {
          setSnackbar(true)
          setSnackColor("#4CAF50")
          setTransition(() => TransitionDown)
          setSnackbarmsg("Reset Link has been sent to your email.")
        })
      } catch (err) {
        if (!(err.response === undefined)) {
          setSnackbar(true)
          setSnackColor("#F44336")
          setTransition(() => TransitionDown)
          setSnackbarmsg(err.response.data.message)
        }
      }
    }
  }

  const validator = () => {
    if (email === "") {
      setEmailError(true)
      setEmailHelperText("This field is required")
    } else {
      setEmailError(false)
      setEmailHelperText("")
      onSubmit()
    }
  }
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Typography
            variant="h6"
            style={{ fontWeight: 500, color: "#1C3B6B" }}
          >
            FORGOT YOUR PASSWORD?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: 500, color: "#1C3B6B" }}
          >
            Don't worry! Just fill in your Email and we'll send you a link to
            reset your password.
          </Typography>
        </Grid>
      </Grid>
      <FormControl fullWidth error={emailError}>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="email"
          error={emailError}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email Address"
          className={classes.fields}
          name="email"
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon
                  fontSize="small"
                  color={emailError ? "error" : "action"}
                />
              </InputAdornment>
            ),
          }}
        />
        {emailError && <FormHelperText>{emailHelperText}</FormHelperText>}
      </FormControl>
      <Button
        fullWidth
        variant="contained"
        style={{
          margin: "25px 0px",
          backgroundColor: "#1C3B6B",
          color: "#fff",
        }}
        onClick={validator}
      >
        Send Reset Link
      </Button>
    </>
  )
}
