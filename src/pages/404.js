import React from "react"
import Layout from "../components/main/layout"
import Button from "@material-ui/core/Button"
import "../styles/404.css"
import { Link } from "gatsby"
import KommunicateChat from "../chat"

export default function Home() {
  return (
    <Layout>
      <div style={{ justifyContent: "center" }}>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="title">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Looks like you're lost ☹ ☹</h3>

                    <p>The page you are looking for is not available !!</p>

                    <Link to="/">
                      <Button
                        variant="contained"
                        style={{
                          background:
                            "linear-gradient(45deg, #67e663 30%, #3da839 90%)",
                          boxShadow: "0 3px 5px 2px rgba(159, 237, 157, .3)",
                          color: "white",
                        }}
                      >
                        Go to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <KommunicateChat />
    </Layout>
  )
}
