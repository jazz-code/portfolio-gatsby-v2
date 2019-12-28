import React from "react"
import { Link } from "gatsby"
//scss
import "../styles/styles.scss"
// Normalize
import "normalize.css"

import Header from "../components/header"
import Banner from "../components/banner"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    {/* <Link to="/page-2">Go to page 2</Link> */}
  </div>
)

export default IndexPage
