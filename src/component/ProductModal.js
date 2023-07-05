import React, { useState } from 'react';

import "./css/productModal.css"
import { useDataContext } from '../context/DataContext';

const AddProductModal = ({ isEdit=false, categories , onClose,product }) => {

  const {dispatch}=useDataContext();
  const [name, setName] = useState(isEdit?product.name:"");
  const [categoryId, setCategoryId] = useState(isEdit?product.categoryId:"");
  const [price, setPrice] = useState(isEdit?product.price:"");
  const [description, setDescription] = useState(isEdit?product.description:"");
  const [status, setStatus] = useState(isEdit?product.status:"");

  const handleAddProduct = () => {
    const productObj={name,categoryId,price,description,status}
    //API CALL
    if(!isEdit){
      dispatch({type:"AddProduct",payload:productObj})
    }
    else{
      const productObj1={id:product.id,name,categoryId,price,description,status}
      console.log(productObj1)
      dispatch({type:"EditProduct",payload:productObj1})
    }
  
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="categoryId">Category ID:</label>
        <select onChange={(e)=>setCategoryId(e.target.value)}>
        {
            categories.map(({id,name})=>(
                <option key={id} value={id}>{name}</option>
            ))
        }
      </select>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAddProduct}>{isEdit?"Edit Product":"Add Product"}</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
