import React from "react";

import { useState } from "react";
import { CategoryModal } from "./CategoryModal";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

import "./css/categoryCard.css";

import { useDataContext } from "../context/DataContext";

const CategoryCard = ({ categoryName, backgroundImage, isAddCard = false }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const { dispatch } = useDataContext();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const HandleViewCategory = () => {
    if (isAddCard) {
      setShow(true);
    }
  };

  const handleDelete = () => {
    dispatch({ type: "deleteCategory", payload: categoryName });
  };
  const handleEdit = () => {
    setEdit(true);
    setShow(true);
  };

  return (
    <div className="category-card" style={cardStyle}>
      {!isAddCard && (
        <div
          classname="delIcon"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "30%",
            color: "green",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <span>
            <AiFillDelete onClick={handleDelete} />
          </span>
          <span>
            <AiFillEdit onClick={handleEdit} />
          </span>
        </div>
      )}
      <div className="category-content">
        <div className="category-name">{categoryName}</div>
        <button className="view-products-btn" onClick={HandleViewCategory}>
          {isAddCard ? "Add Category" : "View Products"}
        </button>
      </div>

      {!edit && show && <CategoryModal setShow={setShow} />}
      {edit & show && (
        <CategoryModal
          setShow={setShow}
          isEdit={true}
          category={categoryName}
        />
      )}
    </div>
  );
};

export default CategoryCard;
