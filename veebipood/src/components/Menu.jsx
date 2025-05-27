import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
        <Link to="/">
          <img className="pilt" src="https://cdn.abcotvs.com/dip/images/15072349_071924-wtvd-worlds-largest-duck.jpg" alt="hiiglaslik part" />
        </Link>
        
        <Link to="/ostukorv">
        <button>Ostukorvi</button>
        </Link>

        <Link to="/lisa-toode">
        <button>Lisa toode</button>
        </Link>

        <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
        </Link>

        <Link to="/esindused">
        <button>Esindused</button>
        </Link>

        <Link to="/seaded">
        <button>Seaded</button>
        </Link>
    </div>
  )
}

export default Menu