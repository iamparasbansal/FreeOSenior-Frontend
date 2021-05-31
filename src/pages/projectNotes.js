import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import { NoteCard } from "../components/all/landing/NoteCard"
import Grid from '@material-ui/core/Grid';
import image from '../images/testchemistry.jpg';
import Typography from '@material-ui/core/Typography';
 
export default function projectNotes() {
  return (
    <Layout>
      <Hidden>
        <br/>
          <Typography variant="h1" component="h2" gutterBottom>Notes</Typography>
        <br/>
        <Grid container spacing={5}>
         
        <Grid item xs={12} sm={6}>
           <NoteCard
           title="COA"
           sem="3rd SEM"
           dlink="ss"
           desc="This is notes of 3rd sem COA"
           imglink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <NoteCard
           title="COA"
           sem="3rd SEM"
           dlink="ss"
           desc="This is notes of 3rd sem COA"
           imglink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <NoteCard
           title="COA"
           sem="3rd SEM"
           dlink="ss"
           desc="This is notes of 3rd sem COA"
           imglink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <NoteCard
           title="COA"
           sem="3rd SEM"
           dlink="ss"
           desc="This is notes of 3rd sem COA"
           imglink={image}

           />
        </Grid>
        </Grid>
       
      </Hidden>
    </Layout>
  )
}
