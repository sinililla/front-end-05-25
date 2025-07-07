import { useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"

function SingleProduct() {
  const { id } = useParams();
   const found = productsFromFile.find(product => product.id === Number(id));

  if (found === undefined) {
    return <div>Product could not be found</div>
  }

  return (
    <>
      <div>{found.id}</div>
      <div>{found.title}</div>
      <div>{found.price}€</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div><img style={{width:"400px"}} src={found.image} alt=""/></div>
      <div>Rating: {found.rating.rate}</div>
      <div>No. of ratings: {found.rating.count}</div>
    </>
  )
}

export default SingleProduct