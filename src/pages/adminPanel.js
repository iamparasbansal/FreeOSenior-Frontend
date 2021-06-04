import React from 'react'
import {navigate} from "gatsby"

const adminPanel = () => {

  localStorage.setItem("AdminAuth", JSON.stringify(false));

  return (
  <>
    {navigate("/adminlogin")}
  </>
  )
}

export default adminPanel

