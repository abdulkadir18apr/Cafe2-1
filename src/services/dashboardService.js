const host = "http://localhost:57950/";

export const dashboardService = async () => {
  console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/dashboard/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      }
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};


export const addProductService = async (productObj) => {
  // console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/product/addNewProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      },
      body:JSON.stringify(productObj),
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const editProductService = async (productObj) => {
  // console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/product/updateProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      },
      body:JSON.stringify(productObj),
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchProductsService = async () => {
  console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/product/getAllProduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      }
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};


// category Services

export const  fetchCategoryService= async () => {
  console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/category/getAllCategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      }
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const addCategoryService = async (categoryObj) => {
  // console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/category/addNewCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      },
      body:JSON.stringify(categoryObj),
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const editCategoryService = async (categoryObj) => {
  // console.log(localStorage.getItem('token'));
  try {
    const response = await fetch(`${host}/api/category/updateCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      },
      body:JSON.stringify(categoryObj),
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteCategoryService = async (id) => {

  try {
    const response = await fetch(`${host}/api/category/deleteCategory/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
        "Access-Control-Allow-Origin": "http://localhost:57950"
      },
    });
     const data=await response.json()
    return data;
  } catch (err) {
    console.log(err);
  }


};