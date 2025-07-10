import { useRef, useState } from "react"
// import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from "react-toastify"
import { useEffect } from "react";

function AddProduct() {
  // const [products, setProducts] = useState(productsFromFile);
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const selectRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();
  const [unique, setUnique] = useState(true);
  const productsUrl = "https://kaia-webshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(productsUrl)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);



  const checkUniqueID = () => {
    const found = products.find(product => product.id.toString() === idRef.current.value.toString());
    if (found === undefined){
      setUnique(true);
    } else {
      setUnique(false);
    }
  }

  const addProduct = () => {
      products.push( {
        "id" : Number(idRef.current.value), 
        "title" : titleRef.current.value,
        "price" : Number(priceRef.current.value),
        "description" : descriptionRef.current.value,
        "category" : selectRef.current.value,
        "image": imageRef.current.value,
        "rating": {
            "rate": Number(ratingRateRef.current.value),
            "count": Number(ratingCountRef.current.value)
        }
    })
     fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});
    // setProducts(productsFromFile.slice());
      idRef.current.value = "";
      titleRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      selectRef.current.value = "";
      imageRef.current.value = "";
      ratingRateRef.current.value = "";
      ratingCountRef.current.value = "";
      toast.success("Product added!");
  }

  return (
    <div>
      <ToastContainer />
      <label>ID</label> <br />
      <input onChange={checkUniqueID} ref={idRef} type="number" /> <br />
      {unique === false && <div style={{color:"red"}}>A product with this ID already exists!</div>}
      <label>Title</label> <br />
      <input ref={titleRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Category</label> <br />
      <select ref={selectRef}>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Rating</label> <br />
      <input ref={ratingRateRef} type="number" /> <br />
      <label>Rating count</label> <br />
      <input ref={ratingCountRef} type="number" /> <br />
      <button onClick={addProduct} disabled={unique === false}>Add product</button>
      
      
    </div>
  )
}

export default AddProduct