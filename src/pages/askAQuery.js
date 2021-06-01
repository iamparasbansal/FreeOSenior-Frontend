import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Hidden from "@material-ui/core/Hidden"
import Layout from "../components/main/layout"
import { Divider, Avatar, Grid, Paper, Container, Typography } from "@material-ui/core"
import Question from "../components/query/question"
import axiosFetch from "../utils/axiosFetch"
import PostQuestion from "../components/query/PostQuestion"

import { ThemeProvider } from "styled-components"
import { chosenTheme } from "../../theme"
const imgLink =  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
export default function Home() {

  const [queries, setQueries] = useState([]);
  
  useEffect(() => {
    const fetchdata = async()=>{
      try {

        const res=await axiosFetch.get("api/query");

        if(res.data)
        {
          console.log(res.data);
          setQueries(res.data);

        }
        
      } catch (error) {
        console.log(error.response.data.error);
        
      }
    }
    fetchdata();
  }, []);
  return (
    <Layout>
      
      <ThemeProvider theme={chosenTheme}>
        <center>
          <Typography align="center" variant="h1">
            Ask A Query
          </Typography>
        </center>
        <Container maxWidth="md">
          {queries.length > 0 ? (
            queries.map(data => <Question data={data} theme={chosenTheme} />)
          ) : (
            <Question theme={chosenTheme} />
          )}
          <PostQuestion theme={chosenTheme} />
        </Container>
      </ThemeProvider>
    </Layout>
  )
}
