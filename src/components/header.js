// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fa6304`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 350,
        padding: `0.5rem 0.5rem`,
      }}
    >

        <Image resource={"logo_miplanta_duro.png"} />
    
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
