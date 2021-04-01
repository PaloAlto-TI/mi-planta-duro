import { navigate } from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import Image from "../components/image"
import firebase from "gatsby-plugin-firebase"


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: #fa6304;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
      font-family: Poppins;
    }
 
`;

const RightNav = ( props) => {

    const handleLogout = async () =>{
        await firebase.auth().signOut();
        navigate("/")
        if (typeof window !== 'undefined') {
         localStorage.clear();
        }
      }

    console.log(props)
    const {loggedUser, open} = props;

    return (
        <Ul open={open}>
            <div className="grid xs:grid-cols-2">
                <div className="w-8 ml-4 ">
                    <Image resource={"user_icon.png"} />
                </div>
                <div className="xs:-ml-36 xs:-mt-4 ">
                    <li>{loggedUser ? loggedUser.nombre : null}</li>
                </div>
                <div className="w-8 ml-4 ">
                <Image resource={"logout_icon.png"} />
                </div>
                <div className="xs:-ml-36 xs:-mt-4 ">
                    <li onClick={handleLogout}>Salir</li>
                </div>
            </div>

        </Ul>
    )
}

export default RightNav