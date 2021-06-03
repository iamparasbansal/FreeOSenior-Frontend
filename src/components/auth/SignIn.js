import React, { useState } from "react"
import {
  Typography,
  Button,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Axios from "axios"
import Box from "@material-ui/core/Box"
import Slide from "@material-ui/core/Slide"
import EmailIcon from "@material-ui/icons/EmailOutlined"
import PasswordIcon from "@material-ui/icons/LockOpen"
import InputAdornment from "@material-ui/core/InputAdornment"
import { UpdateAuthAction } from "../../store/actions/Auth"
import { useDispatch } from "react-redux"

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
  submitbutton: {
    margin: "25px 0px",
    backgroundColor: "#1C3B6B",
    color: "#FFF",
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
  forgetPassword,
  setSnackbar,
  setSnackColor,
  setSnackbarmsg,
  setTransition,
}) => {
  const classes = useStyles()
  const BASE_URL = "https://free-o-senior.herokuapp.com"
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState("")

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />
  }

  const onSubmit = async event => {
    if (emailError === true || passwordError === true) {
      console.log("Unauthorized Access")
    } else {
      const user = { email, password }
      try {
        await Axios.post(`${BASE_URL}/user/login`, user, {
          origin: true,
          mode: "cors",
        }).then(res => {
          setSnackbar(true)
          setSnackColor("#4CAF50")
          setTransition(() => TransitionDown)
          setSnackbarmsg("Login successful. Redirecting...")
          const data ={userId:res.data.userId,token:res.data.token,admin:res.data.admin};
          localStorage.setItem("Authorization", JSON.stringify(data));
          dispatch(UpdateAuthAction(data, true));
          window.location.reload();
        })
      } catch (err) {
        if (!(err.response === undefined)) {
          setSnackbar(true)
          setSnackColor("#F44336")
          setTransition(() => TransitionDown)
          setSnackbarmsg(err.response.data.error);
        }
      }
    }
  }

  const validator = () => {
    ;[1, 2].map(key => {
      switch (key) {
        case 1:
          if (email === "") {
            setEmailError(true)
            setEmailHelperText("This field is required")
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError(true)
            setEmailHelperText("Enter valid Email")
          } else {
            setEmailError(false)
            setEmailHelperText("")
          }
        /* falls through */
        case 2:
          if (password === "") {
            setPasswordError(true)
            setPasswordHelperText("This field is required")
            return null
          } else if ((password.length < 8) | (password.length > 15)) {
            setPasswordError(true)
            setPasswordHelperText("Invalid Password")
          } else {
            setPasswordError(false)
            setPasswordHelperText("")
          }
        /* falls through */

        case 3:
          if (emailError === false && passwordError === false) {
            onSubmit()
          }
          break
        default:
      }
      return null
    })
    return null
  }
  return (
    <div style={{ padding: 5 }}>
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
          // eslint-disable-next-line
          autoFocus={true}
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
          required
          fullWidth
          name="password"
          className={classes.fields}
          error={passwordError}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          id="password"
          autoComplete="current-password"
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
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          size="small"
          style={{
            textTransform: "capitalize",
            fontSize: 15,
            marginTop: "-5px",
            color: "#1C3B6B",
          }}
          onClick={forgetPassword}
        >
          forgot password ?
        </Button>
      </Box>
      <Button
        fullWidth
        variant="contained"
        onClick={validator}
        disabled={!(email && password)}
        className={classes.submitbutton}
      >
        SIGN IN
      </Button>
    </div>
  )
}
