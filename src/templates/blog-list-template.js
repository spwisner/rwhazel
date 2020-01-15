import React from "react"
import { Link, graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

export default class BlogList extends React.Component {
  render() {
    const { data, pageContext: { currentPage, numPages, previousPagePath, nextPagePath } } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout pageTitle='Blog'>
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
          <div className="container">
            <div className="content">
              <div className="columns is-multiline">
                {posts &&
                  posts.map(({ node: post }) => (
                    <div className="is-parent column is-6" key={post.id}>
                      <article
                        className={`blog-list-item tile is-child box notification ${
                          post.frontmatter.featuredpost ? 'is-featured' : ''
                          }`}
                      >
                        <header>
                          {post.frontmatter.featuredimage ? (
                            <div className="featured-thumbnail">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          ) : null}
                          <p className="post-meta">
                            <Link
                              className="title has-text-primary is-size-4"
                              to={post.fields.slug}
                            >
                              {post.frontmatter.title}
                            </Link>
                            <span> &bull; </span>
                            <span className="subtitle is-size-5 is-block">
                              {post.frontmatter.date}
                            </span>
                          </p>
                        </header>
                        <p>
                          {post.excerpt}
                          <br />
                          <br />
                          <Link className="button" to={post.fields.slug}>
                            Keep Reading →
                      </Link>
                        </p>
                      </article>
                    </div>
                  ))}
              </div>
              <div className='blog-pagination-wrap'>
                <Link className="button is-link" to={previousPagePath} style={{ visibility: !!previousPagePath ? 'visible' : 'hidden' }}>Previous</Link>
                <Link className="button is-link" to={nextPagePath} style={{ visibility: !!nextPagePath ? 'visible' : 'hidden' }}>Next</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC }
          limit: $limit
          skip: $skip
      filter: {
            frontmatter: {
            templateKey: {eq: "blog-post" }
        }
      }
    ) {
            edges {
            node {
            excerpt(pruneLength: 400)
          id
            fields {
            slug
          }
          frontmatter {
            title
              templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
              featuredimage {
            childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
      timeToRead
    }
  }
  totalCount
}
}
`