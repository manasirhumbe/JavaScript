//https://superheroapi.com/api/access-token/character-id
//put -> .php after api in the above link

//create your own access-token and update it here...
const SUPERHERO_TOKEN = 000000000000000;     
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroButton = document.getElementById("NewHeroButton")

const heroImageDiv = document.getElementById("heroImage")

const searchButtonDiv = document.getElementById("searchButton")

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id) => {
  // name 👉 base_url/search/batman
  //json.results[0].image.url

  //id 👉 base_url/id
  //json.image.url
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const superHero = json
      showHeroInfo(superHero)
    })  
}
          
const statsToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️',
  power: '📊',
  combat: '⚔️'
}

const searchSuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero)
      
    })
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const image = `<img src = '${character.image.url}' height="300" width='300'>`
  
  const stats =Object.keys(character.powerstats).map(stat => {
    return`<p>${statsToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImageDiv.innerHTML = `${name}${image}${stats}`
  
}
  
const randomNumber = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}
newHeroButton.onclick = () => getSuperHero(randomNumber())
searchButtonDiv.onclick = () => searchSuperHero(searchInput.value)
