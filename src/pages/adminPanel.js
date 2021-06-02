import React from "react"
import EventTable from "../components/adminPanel/EventTable"
import HomeCardTable from "../components/adminPanel/HomeCardTable"
import ProjectNotesTable from "../components/adminPanel/ProjectNotesTable"
import TutorialTable from "../components/adminPanel/TutorialTable"
import WorkshopTable from "../components/adminPanel/WorkshopTable"
import Layout from "../components/main/layout"
import { chosenTheme } from "../../theme"
import { ThemeProvider } from "styled-components"

const adminPanel = () => {
  return (
    <Layout>
      <ThemeProvider theme={chosenTheme}>
        <TutorialTable />
        <br />
        <br />
        <ProjectNotesTable />
        <br />
        <HomeCardTable />
        <br />
        <EventTable />
        <br />
        <WorkshopTable />
      </ThemeProvider>
    </Layout>
  )
}

export default adminPanel
