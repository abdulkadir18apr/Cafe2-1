import { useEffect, useState } from "react";
import FilterMenu from "../../component/FilterMenu";
import { Navbar } from "../../component/Navbar";
import { ProductTable } from "../../component/ProductTable";
import { SideBar } from "../../component/Sidebar";

import "../Home/home.css";
export function Products() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-page">
        <div className="column sidebar">
          <SideBar />
        </div>
        <div className="dashboard products">
          <div className="filtermenu">
            <FilterMenu />
          </div>
          <div>
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
}
