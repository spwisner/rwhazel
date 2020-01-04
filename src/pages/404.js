import React from 'react'
import Layout from '../components/Layout'
import { withPrefix } from 'gatsby'

const NotFoundPage = () => (
  <Layout pageTitle='Page Not Found' customOGImage={`${withPrefix('/')}img/404-page-image.png`}>
    <div className='generic-page-wrap contact-page'>
      <div className="container">
        <div className="content">
          <div className='title-wrap contact-title'>
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              Page Not Found
            </h2>
          </div>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <p>You just hit a route that doesn&#39;t exist. Whoops...</p>
          <img src={`${withPrefix('/')}img/404-page-image.png`} alt="404: Page not Found" />
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
