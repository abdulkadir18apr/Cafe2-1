import { Login } from "./pages/Auth/Login";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Category } from "./pages/Category/Category";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}
