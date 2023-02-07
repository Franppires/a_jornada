
import './App.css'
import { useState,useEffect } from 'react'
import axios_instance from './helper/axios_instance'


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokedexList, setPokedexList] = useState([])

  useEffect(() => { 
    axios_instance
      .get('pokemon')
      .then((res) => {
        setPokemonList(res.data.results)
      })
      .catch((err) => console.log(err))

      
      axios_instance
      .get('pokedex')
      .then((res) => {
        setPokedexList(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])
  

  return (
    <div className="App">
      <h1>Front</h1>
      <div>
        {pokemonList.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>

      <div>
        {pokedexList.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
