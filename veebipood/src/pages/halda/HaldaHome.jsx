import { Link } from "react-router-dom"


function HaldaHome() {
  return (
    <div>
        
        <Link to="/halda-autod">
        <button>Halda Autosid</button>
        </Link>

        <Link to="/halda-esindused">
        <button>Halda Esindusi</button>
        </Link>

        <Link to="/halda-hinnad">
        <button>Halda Hindu</button>
        </Link>

        <Link to="/halda-kasutajad">
        <button>Halda Kasutajaid</button>
        </Link>

        <Link to="/halda-tootajad">
        <button>Halda Töötajaid</button>
        </Link>

        <Link to="/halda-tooted">
        <button>Halda Tooteid</button>
        </Link>


    </div>
  )
}

export default HaldaHome