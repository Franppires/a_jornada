import  { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
    <div className="App">
      <div>
        <h1>front beginner</h1>
        <button onClick={() => {setOpenModal(true)}}>abrir modal</button>
        <button onClick={() => {setOpenModal2(true)}}>abrir modal2</button>
      </div>
      <Modal 
      isOpen={openModal} 
      setModalOpen={() => setOpenModal(!openModal)}>

      {/* children é um filho pode ser button ou paragrafo*/}
      <p>children coloca informações assim</p>
      </Modal>
      <Modal 
      isOpen={openModal2} 
      setModalOpen={() => setOpenModal2(!openModal2)}>

      {/* children */}
      <p>children coloca informações assim</p>
      </Modal>
    </div>
  )
}

export default App
