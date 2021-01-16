import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allStrapiProjectWorks: { nodes: projectworks },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projectworks={projectworks} title="all projects" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjectWorks {
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

export default ProjectsPage
