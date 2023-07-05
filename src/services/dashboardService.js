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
