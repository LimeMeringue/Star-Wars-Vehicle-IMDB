import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <br></br>
      <br></br>
      <br></br>
      <p>Hello there! This site conntains information about the vehicles and Starships seen in the first 6 Star Wars Movies.</p>
      <p>This site gets its contents from SWAPI, an open source Star Wars API. More information can be found at: </p>
      <p>
        <a href="https://swapi.dev" target="_blank" rel="noopener noreferrer">
          SWAPI (Star Wars API)
        </a>
      </p>
    </Layout>
  )
}

export const Head = () => (
<>
  <Seo title="About" />
    <meta name="description" content="Your description" />
</>
)

export default AboutPage