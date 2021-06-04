import React from "react"
import Layout from "../components/main/layout"

import Protected from "../components/adminPanel/Protected"
const AdminPanel = () => {

  return (
    <>
       <Layout>
         <Protected/>
       </Layout>
    </>
  )
}

export default AdminPanel;
