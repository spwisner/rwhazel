import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link, withPrefix } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  timeToRead,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div>
      <div className='generic-page-wrap contact-page'>
        <div className="container">
          <div className="content">
            <div className='title-wrap contact-title'>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}>
                Blog
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <div>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}><h4 style={{ padding: 0, margin: 0 }}>{date}</h4> <span style={{ paddingLeft: '5px', fontStyle: 'italic' }}>- {timeToRead} min read</span></div>
              <PostContent content={content} />
              <div className="back-btn" onClick={handleBackClick}>Back</div>
              {tags && tags.length && !!tags[0] ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pageTitle={post.frontmatter.title} customOGImage={`${withPrefix('/')}img/robert-hazel-headshot`}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        timeToRead={post.timeToRead}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
    }
    timeToRead
  }
}

`
