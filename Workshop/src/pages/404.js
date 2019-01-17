import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

function NotFoundPage({ pageContext }) {
  const context = { ...pageContext, frontmatter: { title: '404: Not Found' } }
  return (
    <Layout pageContext={context}>
      <SEO title="404: Not found" pageContext={context} />
      <p>
        La página que estás buscando no existe{' '}
        <span role="img" aria-label="Sonrisa con sudor">
          😅
        </span>
      </p>
    </Layout>
  )
}

export default NotFoundPage
