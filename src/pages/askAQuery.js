import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Hidden from "@material-ui/core/Hidden"
import Layout from "../components/main/layout"
import { Divider, Avatar, Grid, Paper, Container } from "@material-ui/core"
import Question from "../components/query/question"
import axiosFetch from "../utils/axiosFetch"

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
      <Hidden smDown>
        <h1>FreeOSenior Ask A Query</h1>
        <Container>
          {queries.length>0?(

            queries.map((data)=><Question data={data}/>)
            ):(
            <Question/>
          )
        }
        </Container>
      </Hidden>
    </Layout>
  )
}
