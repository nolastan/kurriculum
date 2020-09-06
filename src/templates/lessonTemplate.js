import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="lesson-container">
      <div className="lesson">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <blockquote>
          As a result of completing the {frontmatter.title} lesson,
          students will be able to {frontmatter.objective}.
        </blockquote>
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        objective
      }
    }
  }
`