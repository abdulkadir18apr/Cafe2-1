import React, { useState } from "react";
import "./css/categoryModal.css";
import { useDataContext } from "../context/DataContext";
import { Category } from "../pages/Category/Category";

export const CategoryModal = ({ setShow, isEdit = false, Category = "" }) => {
  const [categoryName, setCategoryName] = useState(isEdit ? Category : "");
  const { dispatch } = useDataContext();

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAdd = () => {
    if (!isEdit) {
      if (categoryName) {
        dispatch({ type: "addCategory", payload: categoryName });
        setShow(false);
        setCategoryName("");
      } else {
        //editDipatch
        alert("editttt");
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={handleChange}
        />
        <div className="buttons">
          <button className="add-btn" onClick={handleAdd}>
            {isEdit ? "Edit" : "Add"}
          </button>
          <button className="cancel-btn" onClick={() => setShow(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
