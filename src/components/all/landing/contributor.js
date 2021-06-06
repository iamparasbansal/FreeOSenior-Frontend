import React from 'react'
import Typography from "@material-ui/core/Typography"
import '../../../styles/global.css'

import { makeStyles } from "@material-ui/core/styles"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles({
   
    contributor: {
      
       padding:'5px auto',
       borderRadius: 30,
       width:'100%',
       backgroundColor: "#91ede5",
       margin: 5,
       color: "#1a1de8",
       fontFamily: "'Livvic', sans-serif"     
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
        <Typography style={{fontSize:18,fontFamily: "'Livvic', sans-serif" ,fontWeight: "bold"}}>{props.name[0].toUpperCase()+props.name.slice(1)}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
        <Typography style={{fontSize:18,fontFamily: "'Livvic', sans-serif"}}>({props.count})</Typography>
        </ListItemSecondaryAction>
      </ListItem>

    )
}
