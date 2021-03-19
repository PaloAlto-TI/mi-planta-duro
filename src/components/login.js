import React, { useState, useContext } from 'react'
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { navigate } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"


export default function Login() {

    const [data, setData] = useState({
        email: "",
        password: "",
        error: null
    })

    const { user, setUser } = useContext(AuthContext)

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const query = useStaticQuery(graphql`
        {
            allUsers {
            edges {
                node {
                role
                user_id
                }
            }
            }
        }
        `)

    const handleSubmit = async e => {
        e.preventDefault()
        setData({ ...data, error: null })
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            setUser(result)
            const u = query.allUsers.edges.find(e => e.node.user_id === user.email);
            
            if (u){
                if (u.node.role === "ti"){
                    navigate("/page-2/", {state:{
                        role: 'ti'
                    }})
                }else{
                    navigate("/page-2/", {state:{
                        role: 'bodega'
                    }})
                }
            }
          
            
            
        } catch (err) {
            setData({ ...data, error: err.message })
            console.log(err)
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="grid grid-flow-row auto-rows-max place-content-center space-y-6 md:pt-24 md:pb-28 xs:pt-52 xs:pb-56">
                <input name="email" type="text" style={{ textAlign: "right", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black", paddingRight: "10px" }} className="block w-56 h-8" placeholder="Usuario" value={data.email} onChange={handleChange}></input>
                <input name="password" type="password" style={{ textAlign: "right", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black", paddingRight: "10px" }} className="block w-56 h-8" placeholder="Contraseña" value={data.password} onChange={handleChange}></input>
                <button style={{ backgroundColor: "whitesmoke", color: "black", fontFamily: "Poppins", fontSize: "12px", border: "0.5px solid black" }} className="block w-24 ml-16 h-10" type="submit" >Iniciar Sesión</button>
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



        </form>



    )
}
