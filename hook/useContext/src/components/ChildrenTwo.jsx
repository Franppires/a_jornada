import useAppContext from "../hook/useAppContext"

export default function ChildrenTwo() { 
    const { setName } = useAppContext()
    
    return (
      <button onClick={() => setName('Carlinhos da massa')}>
        Mude o nome
      </button>
    )
  }