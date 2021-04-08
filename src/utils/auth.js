import axios from "axios"
import { useEffect } from "react"
import { UpdateAuthAction } from "../store/actions/Auth"
import axiosFetch from "./axiosFetch"

export const useAuthState = dispatch => {
  useEffect(() => {
    let subs = true
    axiosFetch
      .get("auth/authenticate")
      .then(res => {
        if (res.data) {
          dispatch(UpdateAuthAction({}, true))
        } else {
          throw new Error("Not logged in")
        }
      })
      .catch(er => {
        dispatch(UpdateAuthAction({}, false))
      })
    return () => {
      subs = false
    }
  }, [dispatch])
}

export const useAuthActions = dispatch => {
  const Logout = () => {
    const access_token = window.localStorage.getItem("Authorization")
    axios
      .get("https://api.freeosenior.in/api/v1/auth/logout", {
        origin: true,
        mode: "cors",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        if (res.data.success) {
          localStorage.removeItem("Authorization")
          dispatch(UpdateAuthAction({}, false))
          if (typeof window !== "undefined") {
            window.location.reload()
          }
        }
      })
      .catch(err => console.log(err))
  }

  const getProfile = () =>
    axiosFetch
      .get("auth/get_user")
      .then(res => {
        if (res.id && res.name) {
          dispatch(UpdateAuthAction(res, true))
          return res
        }
      })
      .catch(() => {})

  return { Logout, getProfile }
}
