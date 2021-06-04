import React from "react"
import Layout from "../components/main/layout"
import Protected from "../components/adminPanel/Protected"
import { chosenTheme } from "../../theme"
import { ThemeProvider } from "styled-components"
const AdminPanel = () => {
  return (
    <>
      <Layout>
        <ThemeProvider theme={chosenTheme}>
          <Protected theme={chosenTheme} />
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default AdminPanel;
