import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navigation-pictures">
      <Link className="main-link" to="work">
        <img src="https://thumbs.dreamstime.com/b/cat-relaxing-beach-wearing-sunglasses-sun-hat-101329962.jpg" alt="" />
        <h2>Töö</h2>
      </Link>
      <Link className="main-link" to="hobbies">
        <img src="https://media.istockphoto.com/id/841225058/photo/cat-with-beer-on-the-beach.jpg?s=612x612&w=0&k=20&c=IpoNQgJFF5sg7s2xMa86sYe0fS3aiULhDSd-mBAxpRI=" alt="" />
        <h2>Hobid</h2>
      </Link>
      <Link className="main-link" to="courses">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/051/931/595/small_2x/cool-cat-relaxing-in-a-pool-float-free-photo.jpeg" alt="" />
        <h2>Kursused</h2>
      </Link>
    
    </div>
  )
}

export default Navbar