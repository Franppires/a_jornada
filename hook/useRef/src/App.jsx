import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

useEffect
function App() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState('')

  const countRef = useRef(0)
  const buttonRef = useRef() // guardar valores de formularios

  const timeToCallSomething = useRef(null)

  const FetchSomething = () => { 
    //requisição
  }

  //só executa quando count começar 
  useEffect(() => {
    countRef.current = count
    // countRef.current = Math.random() ** gerar numero aleatorio
    // setCount((prevValue) => prevValue + 1) ** lupin infinito
    // console.log(countRef.current)
  }, [count]);


  useEffect(() => { 
    buttonRef.current.click() // como tbm outros eventos que manipulam a dom
  }, [])

  console.log(buttonRef.current) // referencia do html


  useEffect(() => { 
    if(timeToCallSomething.current ) {
      clearInterval(timeToCallSomething.current)
    }
    timeToCallSomething.current = setTimeout(FetchSomething, 100)

    return() => clearInterval(timeToCallSomething.current)
  }, [textInput])

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div>
        <p>valor original: {count}</p>
        <p>valor referencia: {countRef.current}</p>
        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <form action="">
          <input 
          name='name' 
          value={textInput} 
          onChange={(e) => setTextInput(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    </div>
  )
}

export default App
