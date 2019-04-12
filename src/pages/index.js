import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Blog posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div>
        <h2>
          <Link to={ post.node.frontmatter.path }>{post.node.frontmatter.title}</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.node.html}}></div>
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            title
            path
          }
          html
        }
      }
    }
  }
`

export default IndexPage
