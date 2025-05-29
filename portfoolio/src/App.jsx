import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'

function App() {
  return (
    <>
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
    <div className="navigation-pictures">
      <Link className="main-link" to="work">
        <img src="https://thumbs.dreamstime.com/b/cat-relaxing-beach-wearing-sunglasses-sun-hat-101329962.jpg" alt="" />
        <p>Siin on mingi tekst.</p>
      </Link>
      <Link className="main-link" to="hobbies">
        <img src="https://media.istockphoto.com/id/841225058/photo/cat-with-beer-on-the-beach.jpg?s=612x612&w=0&k=20&c=IpoNQgJFF5sg7s2xMa86sYe0fS3aiULhDSd-mBAxpRI=" alt="" />
        <p>Siin on veel teksti.</p>
      </Link>
      <Link className="main-link" to="courses">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/051/931/595/small_2x/cool-cat-relaxing-in-a-pool-float-free-photo.jpeg" alt="" />
        <p>Siin on teksti kolmanda pildi kohta.</p>
      </Link>
    
    </div>

    <Routes>
      <Route path="work" element={ <Work /> } />
      <Route path="hobbies" element={ <Hobbies /> } />
      <Route path="courses" element={ <Courses /> } />
    </Routes>

    
    </>
  )
}

export default App
