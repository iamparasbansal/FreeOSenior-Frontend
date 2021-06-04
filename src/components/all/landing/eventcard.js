import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles({
   
    event: {
       borderRadius: 10,
       margin: 10,
    },
    text: {
        margin: 10,
        fontSize: 30,
        fontWeight: "bolder"
    }
});



export const EventCard = (props) => {
   
  const styles=useStyles();  

  return (
    <>
      <Card className={styles.event} >
        <CardMedia
          component="img"
          alt="Could Not be Loaded"
          height="300"
          image={props.img}
          title={props.title}
          onMouseOver
        />
      </Card>
      <Typography className={styles.text}>
            <Link href={props.link} style={{textDecoration: "none"}}>
              {props.title}
            </Link>
            </Typography>
    </>
  )
}

