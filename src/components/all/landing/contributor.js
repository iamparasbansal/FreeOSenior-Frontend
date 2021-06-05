import React from 'react'
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles({
   
    contributor: {
      
       padding:'5px auto',
       borderRadius: 30,
       width:'100%',
       backgroundColor: "#91ede5",
       margin: 5,
       color: "#1a1de8",
       
    },
    avatar: {
      
       height:'15px',
       width:'15px'
       
    }
});

export default function Contributor(props) {

    const styles = useStyles();

    return (
        
        <ListItem alignItems="flex-start" className={styles.contributor}>
       
        <ListItemText>
        <Typography style={{fontSize:16}}>{props.name}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
        <Typography style={{fontSize:16}}>({props.count})</Typography>
        </ListItemSecondaryAction>
      </ListItem>

    )
}
