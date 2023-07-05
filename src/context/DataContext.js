import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchCategoryService, fetchProductsService } from "../services/dashboardService";
import { useAuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    category: [
      {
        id:"01",
        name:"Hot Beverages",
      },
      {
        id:"02",
        name:"cold Beverages"
      }
    ],
    products: [
      {
        id:1002,
        name:"hot cofee",
        description:"cofee description",
        price:"50",
        status:"true",
        categoryId:"01",
        categoryName:"Hot Beverages"
      },
      {
        id:1003,
        name:"cold cofee",
        description:"cofee description",
        price:"500",
        status:"true",
        categoryId:"02",
        categoryName:"cold Beverages"
      }
    ],
    order: [],
    bills: [],
    filters:{searchQuery:"",category:"",sort:-1}
  });

  const {isLogin}=useAuthContext

  let filteredProducts=serachFilter([...state.products],state.filters.searchQuery);
  filteredProducts=categoryFilter(filteredProducts,state.filters.category)
  filteredProducts=sortFilter(filteredProducts,state.filters.sort)

  //fetch Products
  const fetchProducts=async()=>{
    const res=await fetchProductsService();
    if(res){
      dispatch({type:"setProducts",payload:res})
    }

  }
  const fetchCategory=async()=>{
    const res=await fetchCategoryService();
    if(res){
      dispatch({type:"setCategory",payload:res})
    }

  }

  useEffect(()=>{
    //fetchProducts call
  },[isLogin])

  useEffect(()=>{
    //category  call
  },[isLogin])


  return (
    <DataContext.Provider value={{ state, dispatch,filteredProducts }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => useContext(DataContext);

const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "addCategory":
      return {
        ...state,
        category: [...state.category, payload],
      };
    case "setFilters":
      return {
        ...state,
        filters:{...payload}
      }
    case"AddProduct":
      return{
        ...state,
        products:[...state.products,{...payload,id:state.products[state.products.length-1].id + 1,categoryName:state.category.find((cat)=>cat.id===payload.categoryId).name}]
      }
    case "EditProduct":
      return {
        ...state,
        products:[...state.products.map((product)=>product.id===payload.id?{...payload,categoryName:state.category.find((cat)=>cat.id===payload.categoryId).name}:product)]
      }
    case"setProducts":
      return {
        ...state,
        products:[...payload]
      }
    case"setcategory":
      return {
        ...state,
        category:[...payload]
      }

    default:
      state;
  }
};


//filters
const serachFilter=(products,searchQuery)=>{
  if(searchQuery===""){
    return products
  }
  else{
    return products.filter((product)=>(product.name.toLowerCase().includes(searchQuery.toLowerCase())))
  }

}

//category
const categoryFilter=(products,category)=>{
  if(category===""){
    return products
  }
  else{
    return products.filter((product)=>product.categoryName===category);
  }
}

const sortFilter=(products,sort)=>{
  if(sort===-1){
    return products
  }
  else{
    if(sort===0){
      //asc
      return products.sort((a,b)=>a.price-b.price)
    }
    else{
      return products.sort((b,a)=>a.price-b.price)
    }
  }
}