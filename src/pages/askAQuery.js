import React, { useEffect, useState } from "react"

import Layout from "../components/main/layout"
import { Container, Typography } from "@material-ui/core"
import Question from "../components/query/Question"
import axiosFetch from "../utils/axiosFetch"
import PostQuestion from "../components/query/PostQuestion"

import { ThemeProvider } from "styled-components"
import { chosenTheme } from "../../theme"

export default function Home() {

  const [queries, setQueries] = useState([]);
  const [reload, setReload] = useState(true);

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
  }, [reload]);
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
            queries.map(data => (
              <Question
                data={data}
                reload={reload}
                setReload={setReload}
                theme={chosenTheme}
              />
            ))
          ) : (
            <Question
              theme={chosenTheme}
              reload={reload}
              setReload={setReload}
            />
          )}
          <PostQuestion
            theme={chosenTheme}
            reload={reload}
            setReload={setReload}
          />
        </Container>
      </ThemeProvider>
    </Layout>
  )
}
