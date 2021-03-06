export default `

type Film implements Node {
  title: String
  episodeID: Int
  openingCrawl: String
  director: String
  producers: [String]
  releaseDate: String
  species: [Species]
  starships: [Starship]
  vehicles: [Vehicle]
  characters: [Person]
  planets: [Planet]
  created: String
  edited: String
  id: ID!
}
`
