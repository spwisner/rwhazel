import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h3 className="is-size-4 hover-underline" style={{ marginBottom: '5px', padding: 0 }}>{post.node.frontmatter.title}</h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 className='is-size-5' style={{ padding: 0, margin: 0 }}>{post.node.frontmatter.date}</h4> <span style={{ paddingLeft: '5px', fontStyle: 'italic' }}>- {post.node.timeToRead} min read</span></div>
        <div style={{ paddingTop: '15px' }}>{post.node.excerpt}</div>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
      } tagged with “${tag}”`

    return (
      <Layout pageTitle="Tag">
        <div className='generic-page-wrap contact-page'>
          <div className="container">
            <div className="content">
              <div className='title-wrap contact-title'>
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}>
                  Tags
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns is-multiline">
              <div
                className="column is-12 "
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-3 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
