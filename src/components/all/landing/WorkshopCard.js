import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

// import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
// import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  title: {
    color: "purple",
    fontWeight: 500,
  },
  card: {
    flexDirection: "row",
    margin:10
  },
  media: {
    paddingTop : 0
    
  },
  [breakpoints.up("md")]: {
    flexDirection: "row",
    paddingTop: spacing(2),
  },
}))

export const WorkshopCard = (props) => {
  const classes = useStyles()

  // const {
  //   button: buttonStyles,
  //   ...contentStyles
  // } = useBlogTextInfoContentStyles()
  // const shadowStyles = useOverShadowStyles()

  return (
    <>
      <Card className={classes.card} style={{width:1100}}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Could Not be Loaded"
          height="550"
          image={props.imglink}
          title={props.title}
        />
          <CardContent style={{ color: "violet" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid items>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.title}
                  component="h2"
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid items>
                <Typography variant="h4" color="textSecondary" component="p">
                  {props.author}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

