import React from 'react'
import Layout from '../../components/Layout'

export default () => (
  <Layout pageTitle='Contact'>
    <div className='generic-page-wrap contact-page'>
      <div className="container">
        <div className="content">
          <div className='title-wrap contact-title'>
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0.75rem', marginTop: '0.75rem' }}>
              Contact
            </h2>
          </div>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>Your submission has been received.</p>
        </div>
      </div>
    </section>
  </Layout>
)
