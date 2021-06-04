import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  title: {
    color: "grey",
    fontWeight: 500,
    fontWeight: "bolder",
    textAlign: "left",
    marginBottom: 10
  },
  desc: {
     fontSize: 20,
     marginBottom: 20
  },
  card: {
    borderRadius: 15,
    flexDirection: "row",
    boxShadow: "0px 20px 30px rgba(38, 57, 77,0.5)",
    margin:10
  },
  media: {
    paddingTop : 0
    
  },
  button: {
    height: 50
  },
}))

export const WorkshopCard = (props) => {

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} style={{width:1100}}>
        
        <CardMedia
          component="img"
          alt="Could Not be Loaded"
          height="550"
          image={props.imglink}
          title={props.title}
        />
          
    
      </Card>
      <div style={{margin :20}}>
      <Typography variant="h1" component="h2" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="h3" component="h3" className={classes.desc}>
          {props.desc}
        </Typography>
        <Typography variant="h3" component="h3" className={classes.desc}>
        <Avatar alt="Remy Sharp" src="../../../images/avatar.png" />
          {props.author}  {new Date(props.date).getUTCDate()+"-"+(new Date(props.date).getUTCMonth()+1)+"-"+new Date(props.date).getUTCFullYear()+" at "+new Date(props.date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(11)}
        </Typography>
        
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        style={{marginBottom: 10}}
      >
      Show Related
      </Button>

        <Divider />
        </div>
    </>
  )
}

