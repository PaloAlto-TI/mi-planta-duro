import React, { useState, useContext } from 'react'
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { navigate } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"


export default function Home(props) {

    console.log(props);
    
    return (<div className="grid xs:grid-cols-2 md:grid-cols-5 gap-4 xs:pl-8 md:pl-8  mb-28 mt-12">
    
    <div className="w-28">
      <a href="https://paloalto.com.ec" target="_blank" rel="noreferrer"><Image aria-label="redirect" tipo={"gira"} resource={"logo_sites_duro.png"} /></a>
    </div>
    
    <div className="w-28 ">
      <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28">
      <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28">
      <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28">
      <Image resource={"logo_sites_duro.png"} />
    </div>
    </div>
    
    )
}


