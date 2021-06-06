import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { UpdateAuthAction } from "../store/actions/Auth"

export default function Savetoken(props) {
    const [created, setCreated] = useState(false)
    const dispatch = useDispatch();
    useEffect( () => {

      const setToken = async()=>{
         const query = new URLSearchParams(props.location.search)
         const token = await query.get("JWT")
         const admin = await query.get("admin")
         const userId =await query.get("userId")
         const jwt = { token: token, admin: admin, userId: userId }
         await localStorage.setItem("Authorization", JSON.stringify(jwt))
         setCreated(true)
      }
        setToken();

    }, []);

  if (created) {
    if (typeof window !== "undefined") {
      window.location = "/"
    }
  }

  return <div></div>
}
