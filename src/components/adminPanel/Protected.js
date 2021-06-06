import { Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from "react-redux"
import EventTable from './EventTable';
import HomeCardTable from './HomeCardTable';
import ImageUploader from './ImageUploader';
import ProjectNotesTable from './ProjectNotesTable';
import TurtorialTable from './TutorialTable';
import UserTable from './UserTable';
import WorkshopTable from './WorkshopTable';

export default function Protected() {

    const state = useSelector(({ auth }) => auth);

    if(state.isLoggedin&&state.admin)
    return (
      <>
        <TurtorialTable />
        <br />
        <br />
        <ProjectNotesTable />
        <br />
        <HomeCardTable />
        <br />
        <ImageUploader />
        <br />
        <EventTable />
        <br />
        <WorkshopTable />
        <br />
        <UserTable/>
        <br />
      </>
    )
    else 
    {
       return (<Typography variant="h1" align="center" > you are not admin</Typography>)

    }
}
