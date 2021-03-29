// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import Image from "../components/image"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby-link"
import { AuthContext } from "../context/auth"

// import firebase from "gatsby-plugin-firebase"
// import { navigate } from "gatsby-link"


const Header = ({ siteTitle }) => {
  
  const { user } = useContext(AuthContext)

   const handleLogout = async () =>{
     await firebase.auth().signOut();
     navigate("/")
     if (typeof window !== 'undefined') {
      localStorage.clear();
     }
   }

  return (<header
    style={{
      background: `#fa6304`,
      marginBottom: `1.45rem`,
    }}
  >

<div className="flex h-14">
  <div className="flex-grow  h-16 ...">
  </div>
  <div className="flex-shrink w-72 h-16 ...">
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
        maxWidth: 350,
        padding: '0.5rem 0.5rem',
      }}
    >
      { user? <div title="Salir de Mi Planta" style={{
        margin: `0 auto`,
        maxWidth: 35,
        paddingTop: '0.2rem',
      }} onClick={handleLogout}><Image resource={"logout_icon.png"} />
</div> :null}
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
