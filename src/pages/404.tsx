import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <div style={{padding: '48px'}}>
    <h1>Not found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <a href='/'><button>Take me back!</button></a>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" description={''} author={'Philip'} />


export default NotFoundPage
