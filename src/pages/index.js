import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> Welcome to my Star Wars site</p>
      {/* component for embedded youtube video */}
      <VideoContainer>
        <StyledIframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Dea4bypvgao?autoplay=1&mute=1"  // Added autoplay=1 here
          title="The Empire Strikes Back Trailer"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
export default IndexPage

const VideoContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  max-width: 600px; 
  margin: 0 auto;  
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 315px;
  max-width: 560px; 
  border-radius: 8px; 
`;
