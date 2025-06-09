import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="main">
    <div className="intro">
      <img className="main-picture" src="https://img.freepik.com/premium-photo/portrait-funny-cat-sunglasses-blue-float-beach-summer-concept-ai-generative_123827-24579.jpg" alt="" />
      <h2>Terekest, see on minu näidisportfoolio front-end kursuse jaoks.</h2>
      <p><b>Vajuta julgelt minu väga funktsionaalseid sotsiaalmeedia ikoone ;).</b></p>
    </div>
    <a className="social-button" href="https://www.facebook.com/groups/473412460209365/">
      <img src="/facebook.png" alt="" />
      <span>Facebook</span>
    </a>

    <a className="social-button" href="https://www.instagram.com/sinililla/#">
      <img src="/instagram.png" alt="" />
      <span>Instagram</span>
    </a>

    <a className="social-button" href="https://www.neti.ee/">
      <img src="/envelope.png" alt="" />
      <span>E-mail</span>
    </a>
    <div className="rectangle"></div>
    <div className="side-title">Kaia</div>
    

    <Routes>
      <Route path="" element={ <Navbar /> } />
      <Route path="work" element={ <Work /> } />
      <Route path="hobbies" element={ <Hobbies /> } />
      <Route path="courses" element={ <Courses /> } />
    </Routes>

    </div>
    </>
  )
}

export default App
