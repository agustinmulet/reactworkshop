import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/
 * - `StaticQuery`: https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/
 */

const Image = ({ imgName, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.nodes.find(
        (node) => node.gatsbyImageData.images.fallback.src.includes(imgName),
      )
      if (!image) {
        return null
      }
      return <GatsbyImage image={image.gatsbyImageData} alt={alt} placeholder="blurred" />;
    }}
  />
)
export default Image
