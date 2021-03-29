import React from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import "../styles/404.css";
import {Link} from 'gatsby'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" description="Go Back to our Home Page" />
        <div className="root">
            <div class="main">
                <h1>Error 404</h1>
                <h1>Page not found!</h1>
                <Link to="/">Go to Home Page</Link>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage