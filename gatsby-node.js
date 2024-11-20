const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
query {
  Drupal {
    allFilms(first: 10) {
      films {
        vehicleConnection(first: 50) {
          vehicles {
            name
            passengers
            cargoCapacity
            costInCredits
            manufacturers
            model
            vehicleClass
            maxAtmospheringSpeed
          }
        }
        title
        id
        director
        edited
        episodeID
        openingCrawl
        producers
        releaseDate
        starshipConnection(first: 50) {
          starships {
            name
            pilotConnection {
              pilots {
                name
              }
            }
            MGLT
            starshipClass
            hyperdriveRating
            manufacturers
            model
            cargoCapacity
            costInCredits
          }
        }
      }
    }
    allVehicles(first: 50) {
      vehicles {
        costInCredits
        name
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
  )

  // Create pages for each film
  const filmPostTemplate = path.resolve(`src/templates/film-post.js`)

  result.data.Drupal.allFilms.films.forEach((film) => {
    createPage({
      path: `/film/${film.title}`, 
      component: filmPostTemplate,
      context: {
        film: film,
      },
    })
  })
}
