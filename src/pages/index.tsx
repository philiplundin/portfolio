import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title/Title"
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Education from "../components/Education/Education"
import Skills from "../components/Skills/Skills"
import Links from "../components/Links/Links"

const IndexPage = () => (
  <Layout>
    <Title/>
    <Links />
    <About />
    <Experience />
    <Education />
    <Skills />
  </Layout>
)

export const Head = () => <Seo title="Home" description={''} author={'Philip'} />

export default IndexPage