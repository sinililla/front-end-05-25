import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoriesUrl = "https://kaia-webshop-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const categoryRef = useRef();

  useEffect(() => {
    fetch(categoriesUrl)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({name: categoryRef.current.value});
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)});
    setCategories(categories.slice());
    categoryRef.current.value = "";
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)});
    setCategories(categories.slice());
  }

  return (
    <div>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Add</button> <br />
      {categories.map((category, index) =>
        <div>
          {category.name}
          <button onClick={() => deleteCategory(index)}>X</button>
        </div>
      )}
    </div>
  )
}

export default MaintainCategories