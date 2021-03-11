import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Login  from "../components/login"
const IndexPage = () => (
  <Layout>
    <SEO title="DURO" />
    <Login/>
    {/* <div className="grid grid-flow-row auto-rows-max place-content-center space-y-6 md:pt-24 md:pb-28 xs:pt-52 xs:pb-56">
      <input type="text" style={{ textAlign: "right", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black", paddingRight: "10px" }} className="block w-56 h-8" placeholder="Usuario"></input>
      <input type="password" style={{ textAlign: "right", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black", paddingRight: "10px" }} className="block w-56 h-8" placeholder="Contraseña"></input>
      <button style={{ backgroundColor: "whitesmoke", color: "black", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black" }} className="block w-24 ml-16 h-10">Iniciar Sesión</button>
      <Link
        to="/page-2/"
        className="ml-10"
        style={{
          fontSize: '12px',
          fontWeight: 'bold',
          fontFamily: 'Poppins',
          color: "#fa6304"
        }}>
        ¿Olvidaste tu contraseña?
      </Link>
    </div>

    
 */}


    {


    /* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
