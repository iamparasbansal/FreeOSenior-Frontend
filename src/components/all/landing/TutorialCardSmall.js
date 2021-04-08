import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        backgroundColor: "#FFF",
        marginBottom: 0
    },
    name: {
        color: "#1C3B6B",
        fontWeight: 500,
        fontSize: 22,
        lineHeight: 1,
        textAlign: 'center'
    }
}));

function TutorialCardSmall(props) {
    const classes = useStyles();
    const BASE_URL = 'https://api.freeosenior.in'

    const tutorial = props.tutorial

    return (
        <Paper elevation={0} style={{ backgroundColor: '#FFF' }}>
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={1}
            >
                <Grid item>
                    <img src={`${BASE_URL}/tutorials/photos/${tutorial.photos}`} alt={tutorial.photos} className={classes.image} />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.name}>{tutorial.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{ color: "#1C3B6B", textAlign: 'center', fontSize: "0.75em" }}>
                        {tutorial.name}<br />
                        {tutorial.description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TutorialCardSmall
