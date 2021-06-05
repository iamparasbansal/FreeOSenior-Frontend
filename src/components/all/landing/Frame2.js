import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: props =>({
        textAlign: "center",
        backgroundColor: props.background,
        paddingTop:"10vh",
        paddingBottom:"10vh",
    }),
    heading: props=>({
        marginTop: 20,
        textAlign: "center", 
        color: props.text,
        fontSize: "6vh"
    }),
    innertext: props=>({
        color: props.text,
        fontSize: "4vh",
        textAlign: "center",
        marginBottom: "5vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    })
}));

const Frame2 = (props) => {
    const theme = props.theme;
    const classes = useStyles(theme);
   
    return (
        <div className={classes.root}>
            <Typography data-aos="fade-down" className={classes.heading}>
                <b>Who are We?</b>
            </Typography>
            <Typography data-aos="fade-down" className={classes.innertext}>
              We are a group of like minded people or you can call us your "Seniors" who 
              are dedicated to manage a Platform which is committed to provide necessary help 
              and support to all the Juniors so that they can easily coexist in our college 
              environment.
            </Typography>
        </div>
    );
}
export default Frame2;