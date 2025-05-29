import { Link } from "react-router-dom"

function Work() {
  return (
    <div>
        <Link to="/">
            <button className="tagasi">Tagasi</button>
        </Link>
        <br />
        <div>Töö sisu</div>

    </div>
  )
}

export default Work