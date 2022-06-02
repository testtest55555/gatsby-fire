
import React, { useContext } from "react"
import Layout from "../components/layout"
import { AuthContext } from "../context/auth"

const Index = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout>

      {user && <><h1>Homepage</h1>Hello {user.email}</>}


    </Layout>
  )
}

export default Index
