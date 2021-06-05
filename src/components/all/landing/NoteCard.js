import React from "react"
import cx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextInfoContent from "@mui-treasury/components/content/textInfo"
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "0 auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    width: "80%",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",

    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  cardcontent: {
    width: "60%",
    display:'flex',
    flexDirection:"column",
    alignContent:'center',
    justifyContent:'center',

    [breakpoints.down("md")]: {
      width: "90%",
      margin:'0 auto',
    },
  },
  media: {
    
    objectFit: "cover",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    width: "80%",
    height: "auto",
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#ffffff",
    position: "relative",
    [breakpoints.up("md")]: {
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      backgroundImage: "linear-gradient(147deg, #ffffff 0%, #ffffff 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.0,
    },
  },

  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}))

export const NoteCard = props => {

  const semarray=[",",'Ist','IInd','IIIrd','IVth', 'Vth','VIth',"VIIth", "VIIth"];
  const styles = useStyles()
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()
  return (
    <>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia className={styles.media} image={props.imglink} />
        <CardContent className={styles.cardcontent}>
          <TextInfoContent
            overline={`${semarray[props.sem]} sem`}
            heading={props.title}
            body={props.desc}
            classes={contentStyles}
          />
          <Button className={buttonStyles} href={props.dlink}>
            See More
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
