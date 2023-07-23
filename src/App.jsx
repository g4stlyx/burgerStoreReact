import './styles/app.css'
import { Route,Routes } from 'react-router-dom'

//Components
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Navi from "./components/Navi"
import NotFound from "./components/NotFound"


function App() {
  return (
    <div className='App'>
      <Navi />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/menu" exact element={<Menu/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
