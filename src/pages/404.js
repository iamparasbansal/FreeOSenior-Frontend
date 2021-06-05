import React from "react"
import Layout from "../components/main/layout"
import Hidden from "@material-ui/core/Hidden"
import '../styles/404.css';
import KommunicateChat from "../chat"

export default function Home() {

  return (
    <Layout>
      
        <div style={{justifyContent: "center"}}>
        <section className="page_404">
        <div className="container">
        <div className="row">	
        <div className="col-sm-12 ">
        <div className="col-sm-10 col-sm-offset-1  text-center">
        <div className="four_zero_four_bg">
        <h1 className="title">404</h1>
        
        </div>
        
        <div className="contant_box_404">
        <h3 className="h2">
        Looks like you're lost ☹ ☹
        </h3>
		
		    <p>The page you are looking for is not available !!</p>
		
        <a href="/home" className="link_404">Go to Home</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
      
      <KommunicateChat/>
    </Layout>
  )
}
