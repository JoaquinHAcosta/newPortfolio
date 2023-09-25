import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hamburger from './components/Hamburger'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Hamburger/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
