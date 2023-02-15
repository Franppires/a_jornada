import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)

  const [data, setData] = useState('')

  // //vai renderizar sempre
  // useEffect(() => { 
  //   console.log('renderiza sempre')
  // })

  // // executa ao iniciar 
  // useEffect(() => { 
  //   console.log('executa na primeira vez que a pagina carrega')
  // }, [])

  // // executa sempre que um estado especifico é alterado
  // useEffect(() => { 
  //   console.log('executa sempre que um estado especifico é alterado')
  // }, [countB])

  // clinap
  // useEffect(() => { 

  //   const timer =  setTimeout(() => { 
  //     console.log(`O count foi executado ${count}`)
  //   }, 1000)

  //   return () => {
  //      clearTimeout(timer)
  //   }
  // }, [count])

  // //caso real
  useEffect(() => { 
    fetch('https://api.github.com/users/franppires/repos')
      .then((response) =>  response.json())
      .then((data) => setData(data))
  }, [])

  console.log(data)

  if (!data) { 
    return <p> Loading</p>
  }
   
  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p >Repos: {data.map((repo) => repo.name)}</p>
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>     
      <div className="card">
        <p>Foi renderizado {countB}</p>
        <button onClick={() => setCountB((count) => count + 1)}>Render B</button>
      </div>
    </div>
  )
}

export default App
