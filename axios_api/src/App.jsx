
import './App.css'
import useAxios from './hook/use_axios'
import pokemonInstance from './helper/axios_instance'

function App() {
  const [pokemonList, loading, error] = useAxios({ 
    axiosInstance: pokemonInstance, 
    method: 'GET', 
    url: 'pokemon', 
  })

console.log(pokemonList, loading, error)

  if (loading) { 
    return <div>Loading</div>
  }

  return (
    <div className="App">
      <h1>Front</h1>
      <div>
        {pokemonList.results.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
