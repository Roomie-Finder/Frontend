import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    const userJson = localStorage.getItem("user");

    let token = null;

    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        if (user && typeof user.token === "string" && user.token.length > 0) {
          token = user.token;
        }
      } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
