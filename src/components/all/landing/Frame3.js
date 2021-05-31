import { Grid, Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import CarouselCards from "./Carousels/Carousel"
import imageLight from "../../../images/blueTexture2.jpg"
import imageDark from "../../../images/dark-theme-background3.jpg"
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: props=>({
      borderRadius: 0,
      height: '85vh',
      backgroundImage: props.light? `url(${imageLight})`: `url(${imageDark})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
  })
}));


function Frame3(props) {

  const theme = props.theme;
  const classes = useStyles(theme);

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
              marginTop: '5vh', 
              color: theme.text
            }
          }>
            What We Do?
          </Typography>
        </Grid>
       
        <Grid item>
          <CarouselCards theme={props}/>
        </Grid>

      </Grid>
    </Paper >
  )
}

export default Frame3;