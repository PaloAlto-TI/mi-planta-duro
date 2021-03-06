import React from "react"
//import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// ----> Ultima Versión de Pruebas

const SecondPage = ({ location }) => {

  if (location.state) {
    return(
      <Layout>
        <SEO title="Page two" />
        
        {/* <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link> */}
    
        {location.state.role === "bodega" ? (
            <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-4 xs:pl-8 md:pl-8  mb-28 mt-12">
    
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
      
      
          ) : (
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 xs:pl-8 md:pl-52 mb-28 mt-12">
    
          <div className="w-28 ">
            <Image resource={"logo_sites_duro.png"} />
          </div>
    
          <div className="w-28 md:-ml-16">
            <Image resource={"logo_sites_duro.png"} />
          </div>
    
          <div className="w-28 md:-ml-32">
            <Image resource={"logo_sites_duro.png"} />
          </div>
    
          <div className="w-28 md:mt-8">
            <Image resource={"logo_sites_duro.png"} />
          </div>
    
        </div>
    
          )}
    
        
        
        <hr className="xs:ml-0 xs:-mt-12 md:-ml-52 md:-mt-16 md:w-screen" style={{ height: '2px', backgroundColor: '#fa6304' }}></hr>
        <div className="grid grid-cols-1 md:pl-96 xs:pl-36">
          <div className="hr md:-mt-3 md:pl-3 xs:pl-1 xs:-mt-2.5"></div>
        </div>
    
        <div className="md:ml-72 md:mt-8 md:mb-12">
          <p className="xs:ml-12 md:ml-6 xs:mt-2" style={{ fontFamily: 'Poppins', fontSize: "22px", color: "#fa6304", fontWeight: "bold" }}>Herramientas Google</p>
        </div>
    
        <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-4 xs:pl-8 md:mb-20 xs:mb-12 mt-12 md:m-0">
    
          <div className="w-28">
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
    
          <div className="w-28">
            <Image resource={"logo_sites_duro.png"} />
          </div>
    
        </div>
    
      </Layout>)
  }else{
    return null;
  }
  
}

export default SecondPage
