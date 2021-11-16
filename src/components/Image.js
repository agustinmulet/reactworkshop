import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
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
      console.log(data)
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
