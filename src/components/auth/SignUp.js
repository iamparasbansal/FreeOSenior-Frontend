import React, { useState } from "react"
import clsx from "clsx"
import {
  Typography,
  Button,
  TextField,
  FormHelperText,
  FormControl,
  LinearProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Box from "@material-ui/core/Box"
import Axios from "axios"
import Checkbox from "@material-ui/core/Checkbox"
import EmailIcon from "@material-ui/icons/EmailOutlined"
import PasswordIcon from "@material-ui/icons/LockOpen"
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined"
import CallOutlinedIcon from "@material-ui/icons/CallOutlined"
import InputAdornment from "@material-ui/core/InputAdornment"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#3F51B5",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
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
  disabledButton: {
    background: "#1C3B6B",
    margin: "25px 0px",

    "&:hover": {
      background: "#19345e",
    },
    "&:disabled": {
      background: "#E2E2E2",
    },
  },
  close: {
    padding: theme.spacing(0.5),
  },
}))

export default ({
  setSnackbar,
  setSnackColor,
  setSnackbarmsg,
  setTransition,
  goToSignIN,
}) => {
  const classes = useStyles()
  const BASE_URL = "https://free-o-senior.herokuapp.com"

  const [firstname, setFirstname] = useState("")
  const [firstnameError, setFirstnameError] = useState(false)
  const [firstnameHelperText, setFirstnameHelperText] = useState("")
  const [lastname, setLastname] = useState("")
  const [lastnameError, setLastnameError] = useState(false)
  const [lastnameHelperText, setLastnameHelperText] = useState("")

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [nameHelperText, setNameHelperText] = useState("")

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState("")
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [submitting, setSubmitting] = useState(!true)

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />
  }

  const validator = () => {
    let valid = true
    if (email === "") {
      valid = false
      setEmailError(true)
      setEmailHelperText("This field is required")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      valid = false
      setEmailError(true)
      setEmailHelperText("Enter Valid Email")
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
    if (firstname === "") {
      valid = false
      setFirstnameError(true)
      setFirstnameHelperText("This field is required")
    }
    // } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(firstname)) {
    //   setFirstnameError(true)
    //   valid = false
    //   setFirstnameHelperText("Enter a valid Full firstname")
    // }
    else {
      setFirstnameError(false)
      setFirstnameHelperText("")
    }
    if (lastname === "") {
      valid = false
      setLastnameError(true)
      setLastnameHelperText("This field is required")
    }

    // else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(lastname)) {
    //   setLastnameError(true)
    //   valid = false
    //   setLastnameHelperText("Enter a valid Full lastname")
    // }
    else {
      setLastnameError(false)
      setLastnameHelperText("")
    }

    if (!valid) {
      return
    }
    setSubmitting(true)
    onSubmit()
  }

  const onSubmit = async event => {
    if (privacyPolicy) {
      const newUser = {
        firstname,
        lastname,
        email,
        password,
      }
      try {
        await Axios.post(`${BASE_URL}/user/signup`, newUser, {
          origin: true,
          mode: "cors",
        }).then(res => {
          setSnackbar(true)
          setSnackColor("#4CAF50")
          setTransition(() => TransitionDown)
          setSnackbarmsg("Please Verify your email then continue to login")
          goToSignIN()
        })
      } catch (err) {
        if (!(err.response === undefined)) {
          setSnackColor("#F44336")
          setTransition(() => TransitionDown)
          setSnackbar(true)
          setSnackbarmsg(err.response.data.error)
        }
      }
    }
  }
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#EFF8FF",
            width: 50,
            height: 50,
            padding: 10,
            margin: 10,
            backgroundImage:
              "url(https://api.freeosenior.in/static/img/google.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "60%",
          }}
          disableElevation
          href={`${BASE_URL}/user/auth/google`}
        />
      </Box>
      <Typography
        align="center"
        style={{
          fontSize: 18,
          color: "#ACACAC",
          padding: "5px 0px 5px 0px",
        }}
      >
        or
      </Typography>

      <FormControl fullWidth error={firstnameError}>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="name"
          error={firstnameError}
          onChange={e => setFirstname(e.target.value)}
          placeholder="firstName"
          name="name"
          autoComplete="firstname"
          // eslint-disable-next-line
          autoFocus
          className={classes.fields}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityOutlinedIcon
                  fontSize="small"
                  color={firstnameError ? "error" : "action"}
                />
              </InputAdornment>
            ),
          }}
        />
        {firstnameError && (
          <FormHelperText>{firstnameHelperText}</FormHelperText>
        )}
      </FormControl>

      <FormControl fullWidth error={lastnameError}>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="name"
          error={lastnameError}
          onChange={e => setLastname(e.target.value)}
          placeholder="LastName"
          name="lastname"
          autoComplete="lastname"
          // eslint-disable-next-line
          autoFocus
          className={classes.fields}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityOutlinedIcon
                  fontSize="small"
                  color={lastnameError ? "error" : "action"}
                />
              </InputAdornment>
            ),
          }}
        />
        {lastnameError && <FormHelperText>{lastnameHelperText}</FormHelperText>}
      </FormControl>
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

        {passwordError && <FormHelperText>{passwordHelperText}</FormHelperText>}
      </FormControl>
      <FormControlLabel
        value="end"
        control={
          <Checkbox
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            checked={privacyPolicy}
            onChange={e => setPrivacyPolicy(!privacyPolicy)}
            name="privacypolicy"
          />
        }
        label={
          <span
            style={{
              color: "#ACACAC",
              fontSize: 13,
            }}
          >
            By Signing up, you agree our terms of service & privacy policy.
          </span>
        }
        labelPlacement="end"
      />
      {submitting && <LinearProgress />}
      <Button
        fullWidth
        color="primary"
        variant="contained"
        disabled={!privacyPolicy}
        className={classes.disabledButton}
        onClick={validator}
      >
        Sign up
      </Button>
    </div>
  )
}
