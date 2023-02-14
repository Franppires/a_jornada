import Navbar from "./components/navbar"
import About from "./pages/about"
import Home from "./pages/home"
import Profile from "./pages/profile"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/profile' element={<Profile />} />
        <Route /> 
      </Routes>
    </>
    
  )
}

export default App
