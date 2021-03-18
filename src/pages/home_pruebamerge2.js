import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const SecondPage = ({ location }) => {

    if (location.state) {
      return(
        <Layout>
          <SEO title="Page tw3" />
          
          {/* Prueba 1 */}
      
      </Layout>)
    }
}

    export default SecondPage
 