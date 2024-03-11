import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Content from "../components/Content"

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Content />
  </Layout>
)

export const Head = () => <Seo title="" description={''} author={'Philip'} />

export default IndexPage