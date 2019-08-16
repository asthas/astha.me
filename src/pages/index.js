import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const [ file ] = data.allFile.edges

  return (
    <Layout>
      <div style={{
        display: 'flex'
      }}>
        <div style={{
          paddingRight: 20
        }}>
          <SEO title="Home" />
          <h1>Hi I'm Astha</h1>
          <p>I’m a Software Engineer.</p>
          <p>I love to share my learning experience through blog posts</p>
          <p>
            Checkout my <a title="resume" href={file.node.publicURL} target="_blank">résumé</a>
          </p>
        </div>
        <div style={{ width: 300, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
