import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, pageTitle, customOGImage }) => {
  const { title, description } = useSiteMetadata()
  const metaTitle = pageTitle ? `${title}: ${pageTitle}` : title
  return (
    <div className="page-wrap">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157019918-1"></script>
        <script>

          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-157019918-1');
          `}

        </script>
        
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${withPrefix('/')}img/apple-touch-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix('/')}img/apple-touch-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix('/')}img/apple-touch-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix('/')}img/apple-touch-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix('/')}img/apple-touch-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix('/')}img/apple-touch-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix('/')}img/apple-touch-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/android-chrome-512x512`}
          sizes="512x512"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/android-chrome-192x192`}
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="icon"
          href={`${withPrefix('/')}img/favicon.ico`}
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={customOGImage ? customOGImage : `${withPrefix('/')}img/robert-hazel-headshot.png`}
        />
      </Helmet>
      <Navbar />
      <div className="page-content-wrap">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
