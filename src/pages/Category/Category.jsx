import { useEffect, useState } from "react";
import CategoryCard from "../../component/CategoryCard";
import { Navbar } from "../../component/Navbar";
import { SideBar } from "../../component/Sidebar";
import { dashboardService } from "../../services/dashboardService";

import { useDataContext } from "../../context/DataContext";

import "../Home/home.css";
export function Category() {
  const [dashboardData, setDashBoardData] = useState({});

  const { state } = useDataContext();

  return (
    <div className="home">
      <Navbar />
      <div className="home-page">
        <div className="column sidebar">
          <SideBar />
        </div>
        <div className="category-container">
          <CategoryCard
            isAddCard={true}
            backgroundImage={
              "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=421&q=80"
            }
          />
          {state.category.map((category) => (
            <div>
              <CategoryCard categoryName={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
