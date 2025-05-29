import { Link } from "react-router-dom"

function Hobbies() {
  return (
    <div>
        <Link to="/">
            <button className="tagasi">Tagasi</button>
        </Link>
        <br />
        <div>Hobide sisu</div>

    </div>
  )
}

export default Hobbies