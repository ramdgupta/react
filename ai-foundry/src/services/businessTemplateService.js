import axios from "axios";

const apiInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding a request interceptor for authorisation(e.g., to add auth tokens)
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllBusinessTemplate = async () => {
  try {
    const response = await apiInstance.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const createBusinessTemplate = async (itemData) => {
  try {
    const response = await apiInstance.post("/template/create", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating business template:", error);
    throw error;
  }
};
