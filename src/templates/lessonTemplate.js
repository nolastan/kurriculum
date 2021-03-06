import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Media from "../components/media"

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
        <link rel="shortcut icon" href={'https://emoji.beeimg.com/'+frontmatter.emoji+'/144/twitter'} />
      </Helmet>
      <div className="lesson" style={{maxWidth:'60rem',marginLeft:'auto',marginRight:'auto', padding: '1.5rem 1.125rem', position: 'relative'}}>
        <header className="lesson-header">
          <img 
            src={'https://emoji.beeimg.com/'+frontmatter.emoji+'/148/twitter'} 
            alt={frontmatter.emoji} 
            style={{height: '48px', marginRight: '0.2em', position: 'absolute', top: '1.5rem', right: '12px'}}
            />
          <h1 style={{fontSize: "300%"}}>
            {frontmatter.title}
          </h1>
          <blockquote>
            As a result of completing the {frontmatter.title} lesson,
            students will be able to {frontmatter.objective}.
          </blockquote>
        </header>
        <main className="lesson-main">
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside>
            <section className="lesson-media">
              <h4>Media</h4>
              <Media items={frontmatter.media} />
            </section>
            <section>
              <form name="Lesson Feedback" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Lesson Feedback" />
                <input type="hidden" name="lesson" value={frontmatter.title} />
                <label>
                  <h4>Feedback</h4>
                  <div>How can we improve this lesson?</div>
                  <textarea name="feedback"></textarea>
                </label>
                <p>
                  <button type="submit">Send Feedback</button>
                </p>
              </form>
            </section>
          </aside>
        </main>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        objective
        emoji
        media {
          url
          title
          type
          note
          source
        }
      }
    }
  }
`