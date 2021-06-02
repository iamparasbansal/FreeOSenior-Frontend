import { Typography } from '@material-ui/core';
import React from 'react';
import EventTable from '../components/adminPanel/EventTable';
import HomeCardTable from '../components/adminPanel/HomeCardTable';
import ProjectNotesTable from '../components/adminPanel/ProjectNotesTable';
import TutorialTable from '../components/adminPanel/TutorialTable';
import WorkshopTable from '../components/adminPanel/WorkshopTable';
import Layout from '../components/main/layout';

const adminPanel = () => {
    return (
      <Layout>
        
        <TutorialTable  />
        <br />
        <br />
        <ProjectNotesTable/>
        <br />
        <HomeCardTable/>
        <br />
        <EventTable/>
        <br />
        <WorkshopTable/>
      </Layout>
    )
}

export default adminPanel;
