/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"


//DEFINICION DE ESTRUCTURA DE LA PÁGINA
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* { typeof window !== 'undefined' ? ( window.location.pathname === "/" ? <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> : <Header siteTitle={data.site.siteMetadata?.title || `Title`} />) : null} */}
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

      </div>
      <footer
        style={{
          background: `#fa6304`,
        }}

        className="md:h-14 xs:h-16 flex justify-end xs:mt-2 md:-mt-2"
      >
        <div className="grid grid-flow-row ">
          <div style={{ color: 'white', fontFamily: 'Poppins', fontSize: '12px', }}className="ml-12 mt-2">
            DURO - {new Date().getFullYear()}
          </div>
          <div style={{ color: 'white', fontFamily: 'Poppins', fontSize: '12px', textDecoration: 'underline' }} className="ml-2 mr-6 -mt-4">
            Políticas y Términos
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
