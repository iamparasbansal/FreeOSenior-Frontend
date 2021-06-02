import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({

  card: {
        maxWidth: 550,
        borderRadius: 10,
        boxShadow: '0px 20px 30px rgba(38, 57, 77,0.5)' 
      },
[breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  }));


export const TutorialCard = (props) => {
  const classes = useStyles();

  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  
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
        <iframe  src={props.embedlink} title={props.title} allowfullscreen></iframe>
       
      </CardMedia>
        <CardContent style={{color: "violet"}}>
          <Typography gutterBottom variant="h3" component="h2">
          {props.title}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p">
            {props.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





      
       </>
    )
}
