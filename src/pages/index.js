import React, { useContext } from "react"
import Layout from "../components/layout"
import { AuthContext } from "../context/auth"

const Index = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout>
      <h1>Homepage</h1>
      {user && <>Hello {user.email}</>}

    </Layout>
  )
}

export default Index
