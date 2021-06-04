import React, { useEffect, useState } from 'react'
// import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import { SortOutlined } from '@material-ui/icons'
import Contributor from './contributor'
import axiosFetch from "../../../utils/axiosFetch"

const useStyles = makeStyles({
    root : {
        margin: 20
    },
    contributor: {
       borderStyle: "hidden",
       borderRadius: 30,
       backgroundColor: "#91ede5",
       margin: 5,
       color: "#1a1de8",
       fontWeight: 200,
    }
});

export default function Frame5() {

    const styles = useStyles();
    
    const [contributors, setcontributors] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/contributor")

        if (res.data) {
          console.log(res.data)
          setcontributors(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.error)
      }
    }
    fetchdata()
  }, [])



    return (
        <Container className={styles.root}>
        <Typography variant="h1" component="h2" style={{textAlign:"center", fontSize:30, margin: 20}}>
          Top Contributors
        </Typography>
        <Divider />
        <br />

        <List >  
        {
            contributors.sort(function(a,b) {return b.count-a.count}).map((contributor)=>     
            <Contributor 
            name={contributor.user.firstname} 
            count={contributor.count}
            />  )      
        }
        </List>



        </Container>
    )
}
