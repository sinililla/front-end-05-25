import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from "react-i18next"


function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
   const { t } = useTranslation();

  const remove = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    toast.success("Item removed from cart!");
  }

  const emptyCart = () => {
    setProducts([]);
    localStorage.setItem("cart", "[]");
    toast.success("Cart emptied successfully!");
  }

  const totalSum = () => {
    let sum = 0;
    products.forEach(product => sum += product.price);
      return sum;
  }

  return (
    <div>
      <ToastContainer />
      {products.length > 0 && <button onClick={emptyCart}>{t("cart.emptycart")}</button>}
      {products.length === 0 && <div>{t("cart.isempty")}</div>}
      <div>{t("cart.carthas")} {products.length} {t("cart.itemstotal")} {totalSum()}€</div>
      <br />
      {products.map((product, index) => 
        <div key={index}>
        <img style={{width:"100px"}} src={product.image} alt=""/>
        <div>{product.title} - {product.price}€</div>
        <button onClick={() => remove(index)}>{t("cart.removefrom")}</button>

        </div>)}    
    </div>
  )
}

export default Cart