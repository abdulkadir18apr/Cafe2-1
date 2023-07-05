import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const navigate = useNavigate();

  const userLogin = async (credentials) => {
    try {
      const response = await loginService(credentials);
      console.log(response);
      localStorage.setItem('token',response.token);
      navigate("/home");
    } catch (err) {
      alert("try login again");
    }
  };

  const userSignup = async (credentials) => {
    try {
      const response = await signupService(credentials);
      console.log(response);
      localStorage.setItem('token',response.token);
      navigate("/home");
    } catch (err) {
      alert("try signup again");
    }
  };

  const logoutUser = () => {
    setIsLogin(false);
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        userSignup,
        isLogin,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
