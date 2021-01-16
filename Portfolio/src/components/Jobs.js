import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiProjects(filter: {}, sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        Name
        project_title
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { Name, project_title, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Projects" />
      <div className="jobs-center">
        {/* btn */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.Name}
              </button>
            )
          })}
        </div>
        {/* job */}
        <article className="job-info">
          <h3>{project_title}</h3>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
