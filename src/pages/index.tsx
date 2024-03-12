import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Content from "../components/Content"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <Content />
  </Layout>
)

export const Head = () => <Seo title="" description={''} author={'Philip'} />

export default IndexPage