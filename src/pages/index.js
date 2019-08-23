import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <SEO title="Home" />
        <h1>Hi I'm Astha</h1>
        <p>I’m a Software Engineer.</p>
        <p>I love to share my learning experience through blog posts</p>
        <p>
          Checkout my <a title="resume" href={file.node.publicURL} target="_blank">résumé</a>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
