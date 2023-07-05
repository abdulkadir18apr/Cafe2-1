import React, { useEffect, useState } from "react";
import "./css/filterMenu.css";
import { useDataContext } from "../context/DataContext";
import AddProductModal from "./ProductModal";

const FilterMenu = ({ categories }) => {
    const {state,dispatch}=useDataContext();
    const {category}=state;
    const [filters,setFilters]=useState({searchQuery:"",category:"",sort:-1});

    const [showModal,setShowModal]=useState(false);

    const onClose=()=>{
        setShowModal(false)
    }
    const onOpen=()=>{
        setShowModal(true)
    }

    useEffect(()=>{
        dispatch({type:"setFilters",payload:filters})
    },[filters])

  return (
    <div className="filter-menu">
      <input type="text" placeholder="Search..."  onChange={(e)=>setFilters((prev)=>({...prev,searchQuery:e.target.value}))}/>
      <select onChange={(e)=>setFilters((prev)=>({...prev,category:e.target.value}))}>
        <option value="" >All Categories</option>
        {
            category.map(({id,name})=>(
                <option key={id} value={name}>{name}</option>
            ))
        }
      </select>

      <select onChange={(e)=>setFilters((prev)=>({...prev,sort:Number(e.target.value)}))}>
        <option value="-1">Sort by</option>
        <option value="0">Price: Low to High</option>
        <option value="1">Price: High to Low</option>
      </select>

      <button onClick={onOpen}>Add New Products</button>
      
      {
        showModal && <AddProductModal onClose={onClose} categories={category}/>
      }

    </div>
  );
};

export default FilterMenu;
