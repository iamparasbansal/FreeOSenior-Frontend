import axios from "axios"
import { useEffect } from "react"
import { UpdateAuthAction } from "../store/actions/Auth"
import axiosFetch from "./axiosFetch"

export const useAuthState = dispatch => {

  useEffect(() => {
    let subs = true
      
      // .then(res => {
      //   if (res.data) {
      //     dispatch(UpdateAuthAction({}, true))
      //   } else {
      //     throw new Error("Not logged in")
      //   }
      // })
      // .catch(er => {
      //   dispatch(UpdateAuthAction({}, false))
      // })

    let tokendata =
      typeof window !== "undefined"
        ? localStorage.getItem("Authorization") ||
          window.localStorage.getItem("Authorization")
        : null;

    try {
      
      if (tokendata)
      {
        console.log(tokendata);
        
        dispatch(UpdateAuthAction(JSON.parse(tokendata), true))

      }
      
        else {
          throw new Error("Not logged in")
        }

    } catch (error) {
      dispatch(UpdateAuthAction({}, false))
      
    }

    return () => {
      subs = false
    }
  }, [dispatch])

}

export const useAuthActions = dispatch => {
  const Logout = () => {
    
    axiosFetch
      .get("user/logout")
      .then(res => {
        if (res.data) {
          localStorage.removeItem("Authorization")
          dispatch(UpdateAuthAction({}, false))
          if (typeof window !== "undefined") {
            window.location.reload()
          }
        }
      })
      .catch(err => console.log(err.response))
  }

  return { Logout }
}
