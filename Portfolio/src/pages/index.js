import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiProjectWorks: { nodes: projectworks },
  } = data
  console.log(data)
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projectworks={projectworks} title="Featured Projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjectWorks(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
