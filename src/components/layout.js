import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from "gatsby"
import React, { Fragment, useContext } from "react"
import { AuthContext } from "../context/auth"


export default function Layout({ children }) {

  const { user } = useContext(AuthContext)

  const handleLogout = async () => {
    await firebase.auth().signOut()
    navigate("/login")
  }

  return (
    <Fragment>
      <header
        style={{
          background: "#339",
          color: "white",
          padding: "1rem 5%",
        }}
      >

        {!user && <>
          <Link style={{ color: "white", marginRight: "1rem" }} to="/register">
            Register
          </Link>
          <Link style={{ color: "white", marginRight: "1rem" }} to="/login">
            Login
          </Link>
        </>}
        {user && <>
          <Link style={{ color: "white", marginRight: "1rem" }} to="/">
            My App
          </Link>

          <Link onClick={handleLogout} style={{ color: "white", marginRight: "1rem" }} to="/">
            Logout
          </Link>

        </>
        }

      </header>
      <main
        style={{
          margin: "5rem auto",
          width: "90%",
          maxWidth: 600,
        }}
      >
        {children}
      </main>
    </Fragment>
  )
}
