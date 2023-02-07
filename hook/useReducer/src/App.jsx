import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => { // state é count e showtext e a ação
  switch(action.type) { 
    case "IncrementeAndShowText": // pode deixar separado ou 
      return { count: state.count + 1, showText: !state.showText}
    case "Reset": 
      return { count: 0, showText: true}
    
    default: 
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0, 
    showText: true,
  })

  const {count, showText} = state // ou state.count

  const handleCLick = () => {
    dispatch({ type: "IncrementeAndShowText"})
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <h3>{count}</h3>
      <button onClick={handleCLick}>Adicionar</button>
      {showText && <p>Bem vindo</p>}
      <button onClick={() => {dispatch({ type: "Reset"})}}>Reset</button>
    </div>
  )
}

export default App
