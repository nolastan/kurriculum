import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="lesson-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
        <link rel="shortcut icon" href={'https://emoji.beeimg.com/'+frontmatter.emoji+'/148/twitter'} />
      </Helmet>
      <div className="lesson">
        <h1>
          <img 
            src={'https://emoji.beeimg.com/'+frontmatter.emoji+'/148/twitter'} 
            alt={frontmatter.emoji} 
            style={{height: '2ex', marginRight: '0.2em'}}
          />
          {frontmatter.title}
        </h1>
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
        emoji
      }
    }
  }
`