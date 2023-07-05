const host = "http://localhost:57950/";

export const loginService = async (credentials) => {
  try {
    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Login failed");
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};
export const signupService = async (credentials) => {
  try {
    const response = await fetch(`${host}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: credentials.name,
        contactNumber: credentials.contactNumber,
        email: credentials.email,
        password: credentials.password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};
