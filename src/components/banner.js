import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { IoMdArrowDropdown } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

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
                        <div className="icons">
                            <GoMarkGithub/>
                            <FaLinkedin/>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
                {/* <div className="icons">
                    <GoMarkGithub/>
                </div> */}
                <div className="scroll">
                    <span> <IoMdArrowDropdown /></span>
                </div>
            </div>
        </div>
    )
}

export default Banner