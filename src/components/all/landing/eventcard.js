import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
// import CardContent from "@material-ui/core/CardContent"
// import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
   
    event: {
       borderRadius: 10,
       margin: 10,
    },
    text: {
        margin: 10,
        fontSize: 25,
        fontWeight: "bolder"
    },
    media: {
    overflow: "hidden",
    zIndex: "1",
    "&:hover": {
      transform: "scale(1.3,1.3)",
      transition: "1s transform",
    },
  },
  mediawrapper: {
    width: "100%",
    height: "auto",
    zIndex: "10",
    overflow: "hidden",
    "&:hover": {
      transform: "none",
    },
  },
});

export const EventCard = (props) => {
   
  const styles=useStyles();  

  return (
    <>
      <Card className={styles.event}>
        <div className={styles.mei}>
          
          <CardMedia
            component="img"
            alt="Could Not be Loaded"
            height="300"
            image={props.img}
            title={props.title}
            className={styles.media}
          />
        </div>
      </Card>
      <Typography className={styles.text}>
        <a href={props.link} style={{ textDecoration: "none" }}>
          {props.title}
        </a>
      </Typography>
    </>
  )
}
