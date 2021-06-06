import React, { useEffect, useState } from "react"

import { useQueryParam,StringParam } from "use-query-params"

export default function Savetoken(props) {
    const [created, setCreated] = useState(false)
    
   const [JWT] = useQueryParam("JWT", StringParam)
   const [admin] = useQueryParam("admin", StringParam)
   const [userId] = useQueryParam("userId", StringParam)

   const jwt = { token: JWT, admin:admin==='true', userId: userId }
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
