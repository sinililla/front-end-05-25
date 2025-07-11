import { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'


function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const { t } = useTranslation();
  const selectRef = useRef();

  function addToCart(product){
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success("Item added to cart!");
  }

  function sortAZ(){
    products.sort((a, b) =>  a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

   function sortZA(){
    products.sort((a, b) =>  b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  function cheapestFirst() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

   function expensiveFirst() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  function bestFirst() {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

   function worstFirst() {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  function filterByCategory() {
    // if (selectRef.current.value === "men's clothing"){
    //   const result = productsFromFile.filter(product => product.category === "men's clothing");
    //   setProducts(result);
    // }
    // if (selectRef.current.value === "women's clothing"){
    //   const result = productsFromFile.filter(product => product.category === "women's clothing");
    //   setProducts(result);  
    // }
    // if (selectRef.current.value === "jewelery"){
    //   const result = productsFromFile.filter(product => product.category === "jewelery");
    //   setProducts(result);
    // }
    // if (selectRef.current.value === "electronics"){
    //   const result = productsFromFile.filter(product => product.category === "electronics");
    //   setProducts(result);
    // }
    // if (selectRef.current.value === ""){
    //   setProducts(productsFromFile.slice());
    // }
    if (selectRef.current.value === ""){
      setProducts(productsFromFile.slice());
    } else {
      const result = productsFromFile.filter(product => product.category === selectRef.current.value);
      setProducts(result);
    }
  }


  return (
    <div>
      <ToastContainer />
      <button onClick={sortAZ}>{t("homepage.sortAZ")}</button>
      <button onClick={sortZA}>{t("homepage.sortZA")}</button>
      <button onClick={cheapestFirst}>{t("homepage.cheapfirst")}</button>
      <button onClick={expensiveFirst}>{t("homepage.expensivefirst")}</button>
      <button onClick={bestFirst}>{t("homepage.bestfirst")}</button>
      <button onClick={worstFirst}>{t("homepage.worstfirst")}</button>

      <label>{t("homepage.choose-category")}</label>
      <select ref={selectRef} onChange={filterByCategory}>
        <option value="">--</option>
        <option value="men's clothing">{t("homepage.mens-clothing")}</option>
        <option value="women's clothing">{t("homepage.womens-clothing")}</option>
        <option value="jewelery">{t("homepage.jewelery")}</option>
        <option value="electronics">{t("homepage.electronics")}</option>
      </select>
      <div className="grid-container">
        {products.map(product =>
          <div key={product.title}>
            <div className="grid-item-preview">
              <img style={{width:"50%"}} src={product.image} alt="" />
            </div>
              <div>{product.title}</div>
              <div>{product.price}€</div>          
            <div className="grid-buttons">
              <button onClick={() => addToCart(product)}>{t("homepage.addtocart")}</button>
              <Link to={"/product/" + product.id}>
                <button>{t("homepage.moreinfo")}</button>
              </Link>
          </div>
          </div>      
        )}
      </div>
    </div>
  )
}

export default HomePage