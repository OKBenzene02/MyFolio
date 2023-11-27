import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Banner from "./components/Banner/Banner"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Project/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
