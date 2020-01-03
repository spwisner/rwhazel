import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GenericPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className='generic-page-wrap contact-page'>
        <div className="container">
          <div className="content">
            <div className='title-wrap contact-title'>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

GenericPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GenericPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <GenericPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GenericPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GenericPage

export const GenericPageQuery = graphql`
  query GenericPage($id: String!) {
        markdownRemark(id: {eq: $id }) {
        html
      frontmatter {
        title
      }
      }
    }
  `
