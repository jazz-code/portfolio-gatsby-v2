import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        nyc: file(relativePath: { eq: "nyc.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bg: file(relativePath: { eq: "coney-island.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Anthony Rende</div>
                    <div className="sub-text">Software Developer</div>
                    <div className="main-image">
                        {/* <Img fluid={data.nyc.childImageSharp.fluid} /> */}
                        <Img fluid={data.bg.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner