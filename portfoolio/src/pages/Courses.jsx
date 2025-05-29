import { Link } from "react-router-dom"

function Courses() {
  return (
    <div>
        <Link to="/">
            <button className="tagasi">Tagasi</button>
        </Link>
        <br />
        <div>Kursuste sisu</div>

    </div>
  )
}

export default Courses