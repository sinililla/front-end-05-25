import { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'
import AdminHome from './AdminHome'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function MaintainProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(productsFromFile.slice());

  const searchRef = useRef();

   const removeProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    toast.success("Product successfully removed!");
  }

  const searchProducts = () => { 
    const result = productsFromFile.filter(product => product.title.includes(searchRef.current.value));
    setProducts(result); 
  }

  
  
  
  
  return (
    <div>
      <ToastContainer/>
      <AdminHome />
      <label>{t("mnt-products.search")} </label>
      <input ref={searchRef} onChange={searchProducts} type="text" /> <br /><br />       
          <table>
            <thead>
              <tr>
                <th>{t("mnt-products.id")}</th>
                <th>{t("mnt-products.title")}</th>
                <th>{t("mnt-products.price")}</th>
                <th>{t("mnt-products.description")}</th>
                <th>{t("mnt-products.category")}</th>
                <th>{t("mnt-products.image")}</th>
                <th>{t("mnt-products.rating")}</th>
                <th>{t("mnt-products.ratecount")}</th>
                <th>{t("mnt-products.delete")}</th>
                <th>{t("mnt-products.edit")}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}€</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><button onClick={() => removeProduct(index)}>X</button></td>
                <td>
                  <Link to={"/admin/edit-product/" + index}>
                    <button>{t("mnt-products.edit")}</button>
                  </Link>
                </td>
              </tr>
              )}

            </tbody>
          </table>
    </div>
  )
}

export default MaintainProducts