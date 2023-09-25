import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hamburger from './components/Hamburger'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Navbar/>
      <Hamburger/>
      <Profile/>
      <About/>
      <Experience/>
    </>
  )
}

export default App
