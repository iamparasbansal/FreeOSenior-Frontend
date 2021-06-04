import React from "react"
import Layout from "../components/main/layout"
import Protected from "../components/adminPanel/Protected"
import { chosenTheme } from "../../theme"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { navigate } from "gatsby-link"
const AdminPanel = () => {
  const state = useSelector(({ auth }) => auth)

  if(state.isLoggedin && state.admin)
  return (
    <>
      <Layout>
        <ThemeProvider theme={chosenTheme}>
          <Protected theme={chosenTheme} />
        </ThemeProvider>
      </Layout>
    </>
  )
  
  navigate("/404");
  return null;
}

export default AdminPanel;
