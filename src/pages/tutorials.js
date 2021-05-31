import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import { TutorialCard } from "../components/all/TutorialCard"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';


 
export default function tutorials() {
  var image="https://www.youtube.com/embed/qkxuFKqJXWY";
  return (
    <Layout>
      <Hidden>
        <br/>
          <Typography variant="h1" component="h2" gutterBottom>Tutorials</Typography>
        <br/>
        <Divider />
        <br />
        <div style={{marginBottom:30}}>
        <Grid container spacing={5}>
         
        <Grid item xs={12} sm={6}>
           <TutorialCard 
           title="Microsoft Internship Drive"
           category="Campus Internship"
           embedlink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TutorialCard 
         title="Microsoft Internship Drive"
         category="Campus Internship"
          embedlink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TutorialCard 
         title="Microsoft Internship Drive"
         category="Campus Internship"
          embedlink={image}

           />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TutorialCard 
           title="Microsoft Internship Drive"
           category="Campus Internship"
           embedlink={image}

           />
        </Grid>
        </Grid>
       </div>
      </Hidden>
    </Layout>
  )
}
