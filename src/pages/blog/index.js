import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
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
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
