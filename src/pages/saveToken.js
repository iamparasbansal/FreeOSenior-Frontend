import React, { useEffect, useState,useLoca } from "react"

import { useQueryParam, NumberParam, StringParam } from "use-query-params"

export default function Savetoken(props) {
    const [created, setCreated] = useState(false)
    
   const [JWT, setJWT] = useQueryParam("JWT", StringParam)
   const [admin, setAdmin] = useQueryParam("admin", StringParam)
   const [userId, setUserId] = useQueryParam("userId", StringParam)

   const jwt = { token: JWT, admin: admin, userId: userId }
    
    useEffect( () => {

      const setToken = async()=>{
         
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
