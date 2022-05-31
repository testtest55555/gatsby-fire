import { Link } from "gatsby"
import React, { Fragment } from "react"

export default function Layout({ children }) {
  return (
    <Fragment>
      <header
        style={{
          background: "#339",
          color: "white",
          padding: "1rem 5%",
        }}
      >
        <Link style={{ color: "white", marginRight: "1rem" }} to="/">
          My App
        </Link>
        <Link style={{ color: "white" }} to="/dashboard">
          Dashboard
        </Link>
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
