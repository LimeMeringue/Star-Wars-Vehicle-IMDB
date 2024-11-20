import React, { useState } from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components' 
import { FaSearch } from 'react-icons/fa' 

const SearchPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('') // stores the user input value
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('') // stores the search term 

  const vehicles = data.Drupal.allVehicles.vehicles // gets vehicles
  const starships = data.Drupal.allStarships.starships // Gets starships

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(submittedSearchTerm.toLowerCase())
  )
  const filteredStarships = starships.filter(starship =>
    starship.name.toLowerCase().includes(submittedSearchTerm.toLowerCase())
  )

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    setSubmittedSearchTerm(searchTerm) 
  }

  return (
    <Layout pageTitle="Search for Vehicles or Starships">
      {/* Centered Search Form */}
      <FormWrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchButton type="submit">
            <FaSearch /> 
            Search
          </SearchButton>
        </SearchForm>
      </FormWrapper>

      {submittedSearchTerm && (
        <>
          <h2>Results:</h2>
          {/* Vehicle results */}
          <SectionTitle>Vehicles:</SectionTitle>
          <ResultsList>
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <ResultItem key={vehicle.name}>
                    <h2>{vehicle.name}</h2>
                    <p>Cost: {vehicle.costInCredits ||'Unknown'} Credits</p>
                    <p>Model: {vehicle.model || 'Unknown'}</p>
                    <p>Class: {vehicle.vehicleClass || 'Unknown'}</p>
                    <p>Cargo Capacity: {vehicle.cargoCapacity || 'Unknown'}</p>
                    <p>Manufacturers: {vehicle.manufacturers?.length > 0 ? vehicle.manufacturers.join(', ') : 'Unknown'}</p>
                    <p>Vehicle Class: {vehicle.vehicleClass || 'Unknown'}</p>
                    <p>Max Atmosphering Speed: {vehicle.maxAtmospheringSpeed || 'Unknown'}</p>
                    <p>Appears in: {vehicle.filmConnection.films.map(film => film.title).join(', ')}</p>
                </ResultItem>
              ))
            ) : (
              <p>No vehicles found</p>
            )}
          </ResultsList>

          {/* Starship results Section */}
          <SectionTitle>Starships:</SectionTitle>
          <ResultsList>
            {filteredStarships.length > 0 ? (
              filteredStarships.map((starship) => (
                <ResultItem key={starship.name}>
                  <h2>{starship.name}</h2>
                  <p>Model: {starship.model}</p>
                  <p>Class: {starship.starshipClass}</p>
                  <p>Hyperdrive Rating: {starship.hyperdriveRating}</p>
                  <p>Cost in Credits: {starship.costInCredits}</p>
                  <p>Appears in: {starship.filmConnection.films.map(film => film.title).join(', ')}</p>
                </ResultItem>
              ))
            ) : (
              <p>No starships found</p>
            )}
          </ResultsList>
        </>
      )}
    </Layout>
  )
}

// Styled Components
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
`

const SearchButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #ffcc00;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center; 
  justify-content: center; 
  
  svg {
    margin-right: 8px; 
  }
`

const SectionTitle = styled.h3`
  margin-top: 30px;
  font-size: 1.5rem;
  color: #333;
`

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`

const ResultItem = styled.li`
  background-color: rgba(128, 128, 128, 0.5);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px; 

  h3 {
    margin-top: 3;
  }
`

export const query = graphql`
  query {
    Drupal {
      allVehicles(first: 50) {
        vehicles {
          name
          costInCredits
          model
          vehicleClass
          filmConnection {
            films {
              title
            }
          }
        }
      }
      allStarships(first: 50) {
        starships {
          name
          model
          starshipClass
          hyperdriveRating
          costInCredits
          filmConnection {
            films {
              title
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Search" />;

export default SearchPage
