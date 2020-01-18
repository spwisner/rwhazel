import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRollHome from '../components/BlogRollHome'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  heading
}) => (
    <div>
      <div>
        <div className="home-title">
          <div><h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">{title}</h1></div>
          <div><h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">{subheading}</h3></div>
        </div>
        <div className='home-image-wrap'>
          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="Robert W. Hazel" />
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <BlogRollHome />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn read-more-btn" to="/blog/2">
                        Read more
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle='Home'>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`
