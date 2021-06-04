import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Avatar, Button } from "@material-ui/core"

// import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
// import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  title: {
    color: "grey",
    fontWeight: "bolder",
  },
  desc: {
    
    fontSize: 20,
  },
  card: {
    flexDirection: "row",
    margin: 10,
  },
  media: {
    paddingTop: 0,
  },
  button: {
    height: 50,
  }
}))

export const WorkshopCard = props => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Could Not be Loaded"
            width="100%"
            image={props.imglink}
            title={props.title}
          />
          <CardContent style={{ color: "violet" }}>
            <Grid
              container
              spacing={2}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h1" className={classes.title}>
                  {props.title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h3" className={classes.desc}>
                  {props.desc}
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction="row"
                spacing={2}
                justify="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid item>
                    <Avatar alt="Remy Sharp" src={"https://res.cloudinary.com/dvhrzmkwd/image/upload/v1622565321/Unknown39825/xogatnz3nliw7eryvd2r.png"}/>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h3"
                      component="h3"
                      className={classes.desc}
                    >
                      {props.author}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h3"
                    component="h3"
                    className={classes.desc}
                  >
                    {new Date(props.date).getUTCDate() +
                      "-" +
                      (new Date(props.date).getUTCMonth() + 1) +
                      "-" +
                      new Date(props.date).getUTCFullYear() +
                      " at " +
                      new Date(props.date)
                        .toLocaleString(undefined, { timeZone: "Asia/Kolkata" })
                        .slice(11)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{ marginBottom: 10 }}
                >
                  Show Related
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
