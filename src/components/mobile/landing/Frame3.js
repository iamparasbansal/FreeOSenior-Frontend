import { Grid, Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import CarouselCards from "./Carousels/Carousel"
import image from "../../../images/blueTexture2.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
      borderRadius: 0,
      height: '85vh',
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
  }
}));


function Frame3() {

  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h4" style={
            { 
              fontSize: "6vh", 
              marginBottom: '5vh', 
              marginTop: '5vh' 
            }
          }>
            What We Do?
          </Typography>
        </Grid>
       
        <Grid item>
          <CarouselCards/>
        </Grid>

      </Grid>
    </Paper >
  )
}

export default Frame3;