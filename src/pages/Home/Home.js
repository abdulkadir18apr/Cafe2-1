import { useEffect, useState } from "react";
import { Navbar } from "../../component/Navbar";
import { SideBar } from "../../component/Sidebar";
import { dashboardService } from "../../services/dashboardService";

import "./home.css";
export function Home() {
  const [dashboardData, setDashBoardData] = useState({});

  const fetchData = async () => {
    const res = await dashboardService();
    if (res) {
      //console.log(res);
      setDashBoardData(res);

    }
  };

  useEffect(() => {
   // console.log(localStorage.getItem("token"));

    fetchData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="home-page">
        <div className="column sidebar">
          <SideBar />
        </div>
        <div className="dashboard">
          <div className="column card-container">
            <div className="cards">
              <p>Category</p>
              <p>{dashboardData.category}</p>
            </div>
            <div className="cards">
              <p>Products</p>
              <p>{dashboardData.product}</p>
            </div>
            <div className="cards">
              <p>Bills</p>
              <p>{dashboardData.bill}</p>
            </div>
            <div className="cards">
              <p>Users</p>
              <p>{dashboardData.user}</p>
            </div>
          </div>
          <h1>Best Seller Products</h1>
          <div className="image-card-container">
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                alt="product"
              />
              <p>Cappuccino</p>
              <p>Rs.200</p>
            </div>
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="product"
              />
              <p>Black Hot Tea</p>
              <p>Rs.90</p>
            </div>
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="product"
              />
              <p>Black Forest</p>
              <p>Rs.500</p>
            </div>
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="product"
              />
              <p>Vegetable SandWhich</p>
              <p>Rs.199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
