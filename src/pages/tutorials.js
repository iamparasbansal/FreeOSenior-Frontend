import React, { useEffect, useState }  from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import { TutorialCard } from "../components/all/TutorialCard"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import axiosFetch from "../utils/axiosFetch"


 
export default function Tutorials() {
  
  const [tutorials, settutorials] = useState([]);
  
  useEffect(() => {
    const fetchdata = async()=>{
      try {

        const res=await axiosFetch.get("api/tutorial");

        if(res.data)
        {
          console.log(res.data);
          settutorials(res.data);

        }
        
      } catch (error) {
        console.log(error.response.data.error);
        
      }
    }
    fetchdata();
  }, []);



  return (
    <Layout>
      <Hidden>
        <br/>
          <Typography variant="h1" component="h2" gutterBottom>Tutorials</Typography>
        <br/>
        <Divider />
        <br />
        <div style={{marginBottom:30}}>
        <Grid container spacing={5} alignItems="center" justify="center">
         {
            tutorials.map((tutorial)=> 
           
              <Grid item xs={12} sm={6}>
                  <TutorialCard 
                      title={tutorial.title}
                      category={tutorial.category}
                      embedlink={tutorial.link}
                  />
              </Grid>
         )}
        </Grid>
       </div>
      </Hidden>
    </Layout>
  )
}
