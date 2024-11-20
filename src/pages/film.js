import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components';

const FilmPage = ({ data }) => {
  const films = data.Drupal.allFilms.films // Accesses the films directly from the query result

  return (
    <Layout pageTitle="Films">
      <div style={gridStyle}>
        {
          films.map((film, index) => {
            const imageNode = data.allFile.nodes.find(
              (node) => node.name === film.episodeID.toString()
            );
            const image = getImage(imageNode);
            return (
              <article key={index} style={filmCardStyle}>
                <h2>
                  <StyledLink  to={`/film/${film.title}`}>
                    {film.title}
                  </StyledLink >
                </h2>
                
                <ImageWrapper to={`/film/${film.title}`}>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={film.title}
                      style={{
                        width: '90%',
                        height: 'auto',
                        maxWidth: '500px',
                        maxHeight: '750px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </ImageWrapper>

                <p><strong>Episode </strong> {film.episodeID}</p>
                
              </article>
            );
          })
        }
      </div>
    </Layout>
  );
};

// query to get Film title and episode number
// gets list of image files from directory
export const query = graphql`
  query {
    Drupal {
      allFilms(first: 10) {
        films {
          title
          id
          episodeID
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(width: 500, height: 750, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Films" />;

// grid layout
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
  gap: '20px', 
  margin: '0 auto',
  maxWidth: '1200px', 
};

const filmCardStyle = {
  backgroundColor: '#1e1d1a',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const StyledLink = styled(Link)`
  color: yellow; 
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

//image link
const ImageWrapper = styled(Link)`
  display: block; 
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); 
  }
`;

export default FilmPage;
