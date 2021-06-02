import React from "react"
import { Button, Grid, CircularProgress, Avatar } from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden"
import AuthDialog from "./AuthDialog"
import { navigate } from "gatsby"
import { useAuthActions } from "../../utils/auth"
import { useSelector, useDispatch } from "react-redux"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Profile from "./Profile"

export default function AuthModal() {
  const dispatch = useDispatch()

  const state = useSelector(({ auth }) => auth)

  const { Logout } = useAuthActions(dispatch);
  const [index, setIndex] = React.useState(0)
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const LoggingOut = () => {
    Logout()
    if (typeof window !== "undefined") {
      
      navigate("/")
    }
  }

  if (!state.isLoggedin && (state.isLoggedin ?? true))
    return <CircularProgress />
  if (state.isLoggedin)
    return (
      <>
        <Profile
          open={profileOpen}
          onClose={() => {
            setProfileOpen(false)
          }}
        />
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* <MenuItem
            onClick={() => {
              setProfileOpen(true)
            }}
          >
            My Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              setProfileOpen(true)
            }}
          >
            My Bookings
          </MenuItem> */}
          <MenuItem onClick={LoggingOut}>Logout</MenuItem>
        </Menu>
        <Hidden smDown>
          <Avatar
            style={{
              cursor: "pointer",
              color: "#1C3B6B",
              backgroundColor: "#fff",
            }}
            src={"https://res.cloudinary.com/dvhrzmkwd/image/upload/v1622565321/Unknown39825/xogatnz3nliw7eryvd2r.png"}
            onClick={handleClick}
          ></Avatar>
        </Hidden>
        <Hidden mdUp>
          <br />
          <Grid
            container
            spacing={0}
            style={{ padding: "20px" }}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={LoggingOut}
                style={{
                  height: "40px",
                  fontWeight: "500",
                  minWidth: "50px",
                }}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </>
    )
  return (
    <>
      <Hidden smDown>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpen(true)
                setIndex(0)
              }}
              style={{
                height: "40px",
                fontWeight: "500",
                minWidth: "50px",
              }}
            >
              Sign in
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(true)
                setIndex(1)
              }}
              style={{
                height: "40px",
                fontWeight: "400",
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <br />
        <Grid
          container
          spacing={2}
          style={{ padding: "20px" }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => {
                setOpen(true)
                setIndex(0)
              }}
              style={{
                height: "40px",
                fontWeight: "500",
                minWidth: "50px",
              }}
            >
              Sign in
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                setOpen(true)
                setIndex(1)
              }}
              style={{
                height: "40px",
                fontWeight: "400",
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Hidden>

      <AuthDialog {...{ open, setOpen, index, setIndex }} />
    </>
  )
}
