import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { UpdateAuthAction } from "../store/actions/Auth"

export default function Savetoken(props) {
    const [created, setCreated] = useState(false)
    const dispatch = useDispatch();
    useEffect( () => {
        
        const query = new URLSearchParams(props.location.search)
        const token = query.get("JWT")
        const admin = query.get("admin")
        const userId = query.get("userId")
        console.log(token)
        console.log(admin)
        const jwt = { token: token, admin: admin, userId: userId }
        console.log(jwt)
        localStorage.setItem("Authorization", JSON.stringify(jwt))
        dispatch(UpdateAuthAction(jwt, true))
        setCreated(true)
    }, []);

  if (created) {
    if (typeof window !== "undefined") {
      window.location = "/"
    }
  }

  return <div></div>
}
