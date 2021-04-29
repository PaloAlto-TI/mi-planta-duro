// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby-link"
import Burger from "./burger"

// import firebase from "gatsby-plugin-firebase"
// import { navigate } from "gatsby-link"

// HEADER FRONTEND
const Header = ({ siteTitle }) => {
  
  // MANEJO DE USUARIO
  let loggedUser = null;
  if ( typeof window !== 'undefined') {
    if (localStorage.getItem("loggedUser")){
      
    
      loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
      console.log(loggedUser)
    }

  }
   const handleLogout = async () =>{
     await firebase.auth().signOut();
     navigate("/")
     if (typeof window !== 'undefined') {
      localStorage.clear();
     }
   }

  return (<header className="sticky"
    style={{
      background: `#fa6304`,
      marginBottom: `1.45rem`,
    }}
  >

<div className="flex h-14">
  <div className="desktop flex flex-grow w-8 h-16 mt-4 ml-16 ...">
    
      <div className="flex-1 w-64" style={{
        margin: `0 auto`,
        maxWidth: 35,
        marginTop: "-2%"}}>{loggedUser ? <Image resource={"user_icon.png"} /> : null}</div>
      <div className="flex-1" style={{ fontFamily:"Poppins", color:"white", fontSize:"14px"}}>{loggedUser ? loggedUser.nombre : null} </div>

    
       
  </div>
  <div className="flex-shrink xs:w-72 xs:ml-11 md:-ml-20 md:w-3/4 h-16 ...">
  <div
      style={{
        margin: `0 auto`,
        maxWidth: 350,
        paddingTop: '0.5rem',
      }}
    >
  <Image resource={"logo_miplanta_duro.png"} />
  </div>

  </div>
  <div className="flex-grow h-16 ...">
  <div 
      style={{
        margin: `0 auto`,
        padding: '0.5rem 0.5rem',
      }}
    >
      { loggedUser ? 
      <Burger loggedUser={loggedUser} /> : null}
      {/* { user? <div title="Salir de Mi Planta" style={{
        margin: `0 auto`,
        maxWidth: 35,
        paddingTop: '0.2rem',
      }} role="button" tabIndex="0" onKeyDown={handleLogout} onClick={handleLogout}><Image resource={"logout_icon.png"} />
</div> :null} */}

{ loggedUser? 
      <div className="desktop" title="Salir de Mi Planta" style={{
        margin: `0 auto`,
        maxWidth: 35,
        paddingTop: '0.2rem',
      }} role="button" tabIndex="0" onKeyDown={handleLogout} onClick={handleLogout}><Image resource={"logout_icon.png"} />
</div> : null}

  </div>
  </div>
</div>
   

      
      
    
      {/* <h1 style={{ margin: 0 }}>
        { <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> }
      </h1> */}
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
