import React from "react"
//import { Link } from "gatsby"
// import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby-link"
import Home  from "../components/home"

// import { AuthContext } from "../context/auth"
// import { useStaticQuery, graphql } from "gatsby"


const SecondPage = ({ location }) => {

  let loggedUser = null;
  if ( typeof window !== 'undefined') {
    if (location.state){
      
      localStorage.setItem("loggedUser", JSON.stringify(location.state.node));
    }

    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
    console.log(loggedUser)
  }
  //const { user } = useContext(AuthContext)

  // const query = useStaticQuery(graphql`
  //       {
  //           allUsers {
  //           edges {
  //               node {
  //               role
  //               user_id
  //               }
  //           }
  //           }
  //       }
  //       `)


  ///console.log(location.state.node);


  if (loggedUser){
    return(
      <Layout>
        <SEO title="Inicio" />
        
        {/* <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link> */}
        
        <Home role={loggedUser.role} user={loggedUser.nombre}/>
    
      </Layout>)
  }else{
    if ( typeof window !== 'undefined') {
      navigate("/");
    }
    return null;
  }


  
}

export default SecondPage
