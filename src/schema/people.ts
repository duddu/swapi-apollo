export default `

type Person implements Node {
  name: String
  birthYear: String
  eyeColor: String
  gender: String
  hairColor: String
  height: Int
  mass: Int
  skinColor: String
  homeworld: Planet
  films: [Film]
  species: [Species]
  starships: [Starship]
  vehicles: [Vehicle]
  created: String
  edited: String
  id: ID!
}
`
