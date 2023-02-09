import Navbar from "./components/navbar"
import About from "./pages/about"
import Home from "./pages/home"
import Profile from "./pages/profile"

function App() {
  let Component 

  switch(window.location.pathname) { //navegação 
    case '/':
      Component = Home
    break
    case '/about':
      Component = About
    break
    case '/profile':
      Component = Profile
    break
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
    
  )
}

export default App
