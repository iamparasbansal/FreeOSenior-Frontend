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
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  title: {
    color: "purple",
    fontWeight: 500,
  },
  card: {
    maxWidth: 550,
    borderRadius: 15,
    boxShadow: "0px 20px 30px rgba(38, 57, 77,0.5)",
  },
  [breakpoints.up("md")]: {
    flexDirection: "row",
    paddingTop: spacing(2),
  },
}))

export const TutorialCard = props => {
  const classes = useStyles()

  // const {
  //   button: buttonStyles,
  //   ...contentStyles
  // } = useBlogTextInfoContentStyles()
  // const shadowStyles = useOverShadowStyles()

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            title={props.title}
            height={250}
            image={props.embedlink}
            controls
          >
            <iframe
              src={props.embedlink}
              title={props.title}
              allowfullscreen
            ></iframe>
          </CardMedia>
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
                  {props.category}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
