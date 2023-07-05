import { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    category: ["Snacks", "tea", "cofee"],
    products: [],
    order: [],
    bills: [],
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
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
    default:
      state;
  }
};
