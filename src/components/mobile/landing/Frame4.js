import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        backgroundColor: "#ffffff",
        paddingTop:"10vh",
        paddingBottom:"10vh",
    },
    heading: {
        marginTop: 20,
        textAlign: "center", 
        color: "#000000",
        fontSize: "4vh"
    },
    innertext: {
        color: "#000000",
        fontSize: "2vh",
        textAlign: "center",
        marginBottom: "5vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    }
}));

const Frame4 = () => {
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
export default Frame4;