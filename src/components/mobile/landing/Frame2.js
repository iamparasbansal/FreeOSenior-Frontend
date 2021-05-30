import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        backgroundColor: "#ffffff"
    },
    heading: {
        marginTop: 10,
        textAlign: "center", 
        color: "#000000",
        fontSize: "6vh"
    },
    innertext: {
        color: "#000000",
        fontSize: "3vh",
        textAlign: "center",
        marginBottom: "3vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    }
}));

const Frame2 = () => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            duration: 400,
            offset: -20
        });
    }, []);

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