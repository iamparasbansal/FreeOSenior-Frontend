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
import PasswordIcon from "@material-ui/icons/LockOpen"

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

const Forget = (
  {
    setSnackbar,
    setSnackColor,
    setSnackbarmsg,
    setTransition,
  }
) => {

  const classes = useStyles()
  const BASE_URL = "https://free-o-senior.herokuapp.com"

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState("")
  const [send, setSend] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState("")

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
        await Axios.put(`${BASE_URL}/user/forgot`, user, {
          origin: true,
          mode: "cors",
        }).then(res => {
          setSnackbar(true)
          setSnackColor("#4CAF50")
          setTransition(() => TransitionDown)
          setSnackbarmsg("Reset Link has been sent to your email.")
          setSend(true);
        })
      } catch (err) {
        if (!(err.response === undefined)) {
          setSnackbar(true)
          setSnackColor("#F44336")
          setTransition(() => TransitionDown)
          setSnackbarmsg(err.response.data.error)
        }
      }
    }
  }
  const onSubmit2 = async event => {
    if (emailError === true) {
      console.log("Unauthorized Access")
    } else {
      setSnackbar(true)
      setSnackColor("#4CAF50")
      setTransition(() => TransitionDown)
      setSnackbarmsg("Verifying Email Address. Please Wait...")
      const user = {
        email: email,
        password:password,
        otp:otp
      }
      try {
        await Axios.put(`${BASE_URL}/user/otp/verify`, user, {
          origin: true,
          mode: "cors",
        }).then(res => {
          setSnackbar(true)
          setSnackColor("#4CAF50")
          setTransition(() => TransitionDown)
          setSnackbarmsg(res.data?.msg)
          setSend(true);
        })
      } catch (err) {
        if (!(err.response === undefined)) {
          setSnackbar(true)
          setSnackColor("#F44336")
          setTransition(() => TransitionDown)
          setSnackbarmsg(err.response.data.error)
        }
      }
    }
  }

  const validator1 = () => {
    
    if (email === "") {
      setEmailError(true)
      setEmailHelperText("This field is required")
    } else {
      setEmailError(false)
      setEmailHelperText("")
      onSubmit()
    }

  }
  const validator2 = () => {
    let valid=true;
    if (email === "") {
      setEmailError(true)
      setEmailHelperText("This field is required")
    } else {
      setEmailError(false)
      setEmailHelperText("")
      
    }

    if (password === "") {
       valid = false
       setPasswordError(true)
       setPasswordHelperText("This field is required")
     } else if ((password.length < 8) | (password.length > 15)) {
       valid = false
       setPasswordError(true)
       setPasswordHelperText(
         "Password length should be between 8 and 15 characters "
       )
     } else {
       setPasswordError(false)
       setPasswordHelperText("")
     }

     if (!valid) {
       return
     }
     onSubmit2()
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
        {!send && (
          <Grid item>
            <Typography
              variant="subtitle2"
              style={{ fontWeight: 500, color: "#1C3B6B" }}
            >
              Don't worry! Just fill in your Email and we'll send you a link to
              reset your password.
            </Typography>
          </Grid>
        )}

        {send && (
          <Grid item>
            <Typography
              variant="subtitle2"
              style={{ fontWeight: 500, color: "#1C3B6B" }}
            >
              Enter the OTP and verify
            </Typography>
          </Grid>
        )}
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

      {send && (
        <FormControl fullWidth error={passwordError}>
          <TextField
            variant="outlined"
            margin="dense"
            className={classes.fields}
            required
            fullWidth
            name="password"
            type="password"
            error={passwordError}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon
                    fontSize="small"
                    color={passwordError ? "error" : "action"}
                  />
                </InputAdornment>
              ),
            }}
          />

          {passwordError && (
            <FormHelperText>{passwordHelperText}</FormHelperText>
          )}
        </FormControl>
      )}
      {send && (
        <FormControl fullWidth e>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="otp"
         
          onChange={e => setOtp(e.target.value)}
          placeholder="OTP"
          className={classes.fields}
          name="otp"
          autoComplete="otp"
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
        
      </FormControl>
        
      )}

      {!send && (
        <Button
          fullWidth
          variant="contained"
          style={{
            margin: "25px 0px",
            backgroundColor: "#1C3B6B",
            color: "#fff",
          }}
          onClick={validator1}
        >
          Send Reset Link
        </Button>
      )}

      {send && (
        <Button
          fullWidth
          variant="contained"
          style={{
            margin: "25px 0px",
            backgroundColor: "#1C3B6B",
            color: "#fff",
          }}
          onClick={validator2}
        >
          Verify
        </Button>
      )}
    </>
  )
}

export default Forget
