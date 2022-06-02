import React, {useContext} from "react"
import Layout from "../components/layout"
import { AuthContext } from "../context/auth"

const Index = ()=> {
  const { user } = useContext(AuthContext)
  console.log(user.email)
  return (
    <Layout>
      Hello {user.email}
    </Layout>
  )
}

export default Index
