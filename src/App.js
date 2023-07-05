import { Login } from "./pages/Auth/Login";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Category } from "./pages/Category/Category";
import { Products } from "./pages/Produtcs/Products";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  );
}
