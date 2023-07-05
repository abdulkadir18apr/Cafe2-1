import React, { useState } from "react";
import "./css/productsTable.css";
import { useDataContext } from "../context/DataContext";

import {AiOutlineEdit} from "react-icons/ai"
import AddProductModal from "./ProductModal";

export const ProductTable = () => {
    const {state,filteredProducts}=useDataContext();
    const {products,category}=state;

    const [isEdit,setIsEdit]=useState(false);
    const [editProduct,setEditProduct]=useState([]);
    // console.log(filteredProducts)   
    const handleEdit=(e,product)=>{
        // e.stopPropogation()
        setEditProduct(product)
        setIsEdit(true);
    }

    const onClose=()=>{
        setIsEdit(false)
    }
  return (
    <>
    <table className="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Status</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
            filteredProducts.map((product)=>(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.categoryName}</td>
                    <td>{product.description}</td>
                    <td>{product.status}</td>
                    <td>{product.price}</td>
                    <td style={{cursor:"pointer"}} onClick={(e)=>handleEdit(e,product)}><AiOutlineEdit/></td>
                </tr>
            ))
        }
      </tbody>
    </table>
    {
        isEdit && <AddProductModal onClose={onClose} isEdit={true} product={editProduct} categories={category}/>
    }
    </>
  );
};
