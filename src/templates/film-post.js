import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const film = ({ pageContext }) => {
  const { film } = pageContext;
  const vehicles = film.vehicleConnection?.vehicles || []; // vehicles
  const starships = film.starshipConnection?.starships || []; // starships

  const uniqueVehicleClasses = new Set(vehicles.map((vehicle) => vehicle.vehicleClass));
  const vehicleCount = uniqueVehicleClasses.size;

  const uniqueStarshipClasses = new Set(starships.map((starship) => starship.starshipClass));
  const starshipCount = uniqueStarshipClasses.size;

  return (
    <Layout pageTitle={film.title}>
      {/* Grid Layout for vehicles, general film info, and starships */}
      <FilmGrid>
        {/* Vehicles Section */}
        <section>
          <h2>Vehicles in this Film</h2>
          {vehicles.length > 0 ? (
            <VehicleList>
              {vehicles.map((vehicle, index) => (
                <VehicleItem key={index}>
                  <VehicleName>{vehicle.name}</VehicleName>
                  <NormText>Passengers: {vehicle.passengers || 'Unknown'}</NormText>
                  <NormText>Cargo Capacity: {vehicle.cargoCapacity || 'Unknown'}</NormText>
                  <NormText>Cost: {vehicle.costInCredits || 'Unknown'} Credits</NormText>
                  <NormText>Manufacturers: {vehicle.manufacturers?.length > 0 ? vehicle.manufacturers.join(', ') : 'Unknown'}</NormText>
                  <NormText>Model: {vehicle.model || 'Unknown'}</NormText>
                  <NormText>Vehicle Class: {vehicle.vehicleClass || 'Unknown'}</NormText>
                  <NormText>Max Atmosphering Speed: {vehicle.maxAtmospheringSpeed || 'Unknown'}</NormText>
                </VehicleItem>
              ))}
            </VehicleList>
          ) : (
            <NormText>No vehicles available for this film.</NormText>
          )}
        </section>

        {/* general Film Info (in center)*/}
        <FilmInfo>
          <NormText>{film.openingCrawl}</NormText>
          <h2>General Film Information</h2>
          <NormText><strong>Episode </strong>{film.episodeID}</NormText>
          <NormText><strong>Directed by </strong>{film.director}</NormText>
          <NormText><strong>Release Date:</strong> {film.releaseDate}</NormText>
          <NormText><strong>Produced by </strong>{film.producers?.join(', ')}</NormText>

          <NormText><strong>Number of Vehicle Types:</strong> {vehicleCount}</NormText>
          <NormText><strong>Number of Starship Types:</strong> {starshipCount}</NormText>
        </FilmInfo>

        {/* Starships info section */}
        <section>
          <h2>Starships in this Film</h2>
          {starships.length > 0 ? (
            <StarshipList>
              {starships.map((starship, index) => (
                <StarshipItem key={index}>
                  <StarshipName>{starship.name}</StarshipName>
                  <NormText>Class: {starship.starshipClass}</NormText>
                  <NormText>Model: {starship.model}</NormText>
                  <NormText>Hyperdrive Rating: {starship.hyperdriveRating}</NormText>
                  <NormText>MGLT: {starship.MGLT}</NormText>
                  <NormText>Cargo Capacity: {starship.cargoCapacity}</NormText>
                  <NormText>Cost in Credits: {starship.costInCredits}</NormText>
                  <NormText>Manufacturers: {starship.manufacturers?.join(', ')}</NormText>
                  <NormText>Pilots: {starship.pilotConnection?.pilots.length > 0 ? starship.pilotConnection.pilots.map(pilot => pilot.name).join(', ') : 'Unknown'}</NormText>
                </StarshipItem>
              ))}
            </StarshipList>
          ) : (
            <NormText>No starships available for this film.</NormText>
          )}
        </section>
      </FilmGrid>
    </Layout>
  );
};

export default film;

// Styled Components

const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; 
  gap: 20px;
  margin-top: 30px;
`;

const FilmInfo = styled.div`
  padding: 20px;
  background-color: #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VehicleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const VehicleItem = styled.li`
  margin-bottom: 10px;
`;

const VehicleName = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

const NormText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const StarshipList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StarshipItem = styled.li`
  margin-bottom: 15px;
`;

const StarshipName = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;
